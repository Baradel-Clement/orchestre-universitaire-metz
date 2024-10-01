import { resend } from "@/lib/resend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const date = new Date();
    const months = [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre",
    ];
    console.log(req.body);
    const mailToOrchestre = await resend.emails.send({
      from:
        req.body.first_name !== "" && req.body.last_name !== ""
          ? `${req.body.first_name} ${req.body.last_name} <baradelclement@gmail.com>`
          : "baradelclement@gmail.com",
      to: ["baradelclement@gmail.com"], // baradelclement@gmail.com
      subject: `Message de ${req.body.first_name} ${
        req.body.last_name
      } en date du ${new Date().getDate()} ${
        months[new Date().getMonth()]
      } ${new Date().getFullYear()}`,
      html: `Nom : ${req.body.last_name}<br />
      Prénom : ${req.body.first_name}<br />
      Email : ${req.body.email}<br />
      Message : <br /> <br />
      ${req.body.message}`,
    });

    if (mailToOrchestre.error) {
      return res.status(400).json(mailToOrchestre.error);
    }

    const datePlus3 = new Date(date);
    datePlus3.setDate(datePlus3.getDate() + 3);

    const mailToClient = await resend.emails.send({
      from: "Orchestre Universitaire de Metz <ne-pas-repondre@gmail.com>",
      to: [req.body.email],
      subject: "L'orchestre universitaire de Metz a bien reçu votre message",
      html: `Bonjour ${req.body.first_name},<br /><br />
  
      
      Vous nous avez adressé le message ci-dessous via notre formulaire de contact : <br /><br />
      
      ${req.body.message}<br /> <br />
      
      L'OUM a pris en compte votre demande et vous remercie. Notre équipe met tout en œuvre pour y répondre avant le ${datePlus3.getDate()} ${
        months[datePlus3.getMonth()]
      }.<br /><br />
      
      Si vous souhaitez compléter votre demande, nous vous remercions d'adresser votre message à baradelclement@gmail.com.`,
    });

    if (mailToClient.error) {
      return res.status(400).json(mailToClient.error);
    }
    return res.status(200).json([mailToClient.data, mailToOrchestre.data]);
  } else {
    return res.status(200).json({ message: "Hello from Next.js!" });
  }
}
