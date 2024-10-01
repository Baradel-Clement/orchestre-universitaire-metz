"use client";

import Image from "next/image";
import orchestre from "../../public/assets/orchestre.jpg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <section className="Home">
      <Image src={orchestre} alt="orchestre" />

      <div className="join-us">
        <div className="header">
          <h2 className="primary2 XL">Rejoins-nous !</h2>
          <p>
            L&apos;orchestre Universitaire de Metz est un lieu où les talents
            musicaux se rencontrent pour créer des harmonies uniques. Nous
            accueillons avec enthousiasme des musiciens de tous niveaux et de
            tous horizons. Rejoins-nous pour vivre une expérience musicale
            enrichissante et conviviale ! N&apos;hésite pas à nous contacter par
            mail ou directement sur instagram.
          </p>
        </div>
        <h2 className="primary2 XL">Contactez-nous</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
