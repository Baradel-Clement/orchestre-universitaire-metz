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
    const data = res.json();
    if (!res.ok) {
      throw data;
    }
    return data;
  } catch (error) {
    throw error;
  }
};
