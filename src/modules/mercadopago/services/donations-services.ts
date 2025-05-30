import { Preference } from "mercadopago";
import { mercadopago } from "../infra/client";

export interface Donation {
  id: number;
  amount: number;
}

export const submitDonation = async (amount: Donation["amount"]) => {
  const preference = await new Preference(mercadopago).create({
    body: {
      items: [
        {
          id: "donation",
          unit_price: amount,
          quantity: 1,
          title: "Donación Colectar",
        },
      ],
      metadata: {
        amount,
      },
    },
  });

  return preference.init_point!;
};
