export const sendEmail = async (values: {
  first_name: string;
  last_name: string;
  message: string;
  email: string;
}): Promise<{ message: string }> => {
  try {
    const res = await fetch("api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Erreur lors de l'envoi de l'email");
    }
    return data;
  } catch (error) {
    throw error;
  }
};
