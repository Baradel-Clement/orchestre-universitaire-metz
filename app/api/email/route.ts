import { NextResponse } from "next/server";
import { resend } from "../../../lib/resend";
import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
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
          ? `${req.body.first_name} ${req.body.last_name} <contact@orchestre-universitaire-metz.fr>`
          : "contact@orchestre-universitaire-metz.fr",
      to: ["contact@orchestre-universitaire-metz.fr"], // contact@orchestre-universitaire-metz.fr
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
      return NextResponse.json({ message: mailToOrchestre.error, status: 400 });
    }

    const datePlus3 = new Date(date);
    datePlus3.setDate(datePlus3.getDate() + 3);

    const mailToClient = await resend.emails.send({
      from: "Orchestre Universitaire de Metz <ne-pas-repondre@orchestre-universitaire-metz.fr>",
      to: [req.body.email],
      subject: "L'orchestre universitaire de Metz a bien reçu votre message",
      html: `Bonjour ${req.body.first_name},<br /><br />
  
      
      Vous nous avez adressé le message ci-dessous via notre formulaire de contact : <br /><br />
      
      ${req.body.message}<br /> <br />
      
      L'OUM a pris en compte votre demande et vous remercie. Notre équipe met tout en œuvre pour y répondre avant le ${datePlus3.getDate()} ${
        months[datePlus3.getMonth()]
      }.<br /><br />
      
      Si vous souhaitez compléter votre demande, nous vous remercions d'adresser votre message à contact@orchestre-universitaire-metz.fr.`,
    });

    if (mailToClient.error) {
      return NextResponse.json({ message: mailToClient.error, status: 400 });
    }
    return NextResponse.json([mailToClient.data, mailToOrchestre.data]);
  } else {
    return NextResponse.json({ message: "Hello from Next.js!", status: 200 });
  }
}
