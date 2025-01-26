"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReactLoading from "react-loading";

import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useState } from "react";
import { sendEmail } from "../../utils/sendEmail";
import toast from "react-hot-toast";
import contactIllu from "../../public/assets/contact-illu.png";
import Image from "next/image";

const formSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await sendEmail(form.getValues());
      notify();
    } catch {
      notifyError();
    } finally {
      setIsLoading(false);
      /* setValues({
        firstName: "",
        lastName: "",
        num: "",
        message: "",
        email: "",
      }); */
    }
  };

  const notify = () =>
    toast.success(
      `Votre message a bien été envoyé et vous recevrez un accusé de réception à l’adresse : ${form.getValues(
        "email"
      )}`,
      { duration: 6000 }
    );
  const notifyError = () =>
    toast.error("Erreur. Veuillez réessayer.", { duration: 6000 });
  return (
    <section className="Contact">
      <div>
        <Image src={contactIllu} alt="orchestre" />
        <div className="join-us-content">
          <div className="header">
            <h2 className="text-3xl my-6 text-center font-light text-[#FFF]">
              Contactez-nous
            </h2>
          </div>
          <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prénom</FormLabel>
                    <FormControl>
                      <Input placeholder="Prénom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input placeholder="Nom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        required
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Votre message..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {!isLoading && <Button type="submit">Envoyer</Button>}
              {isLoading && (
                <ReactLoading
                  type={"spin"}
                  color={"blue"}
                  height={66}
                  width={37}
                />
              )}
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
