"use server";

import { submitDonation } from "@/modules/mercadopago/services/donations-services";
import { redirect } from "next/navigation";

export async function donate(formData: FormData) {
  console.log("Processing donation...");
  const amount = formData.get("amount") as string;
  console.log("Donation amount: ", amount);
  const url = await submitDonation(Number(amount));
  console.log("Redirect URL: ", url);

  redirect(url);
}
