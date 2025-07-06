// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   answer: string;
// };

// export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ answer: "Only POST requests are allowed" });
//   }

//   try {
//     const { question } = req.body;

//     if (!question || typeof question !== "string") {
//       return res.status(400).json({ answer: "Invalid question" });
//     }

//     // Replace this with LLM/n8n later
//     return res.status(200).json({ answer: `You asked: "${question}"` });
//   } catch (err) {
//     console.error("Error in /api/chat:", err);
//     return res.status(500).json({ answer: "Something went wrong!" });
//   }
// }


// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = { answer: string };

// export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ answer: "Only POST requests allowed" });
//   }

//   const { question } = req.body;

//   try {
//     const webhookURL = "https://qubezz.app.n8n.cloud/webhook-test/chatbot";
//     const n8nRes = await fetch(webhookURL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ question }),
//     });

//     const data = await n8nRes.json();

//     if (!data.answer) throw new Error("No answer returned from n8n");

//     return res.status(200).json({ answer: data.answer });
//   } catch (err) {
//     console.error("n8n call failed:", err);
//     return res.status(500).json({ answer: "Bot error. Try again!" });
//   }
// }






// import type { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   res.status(200).json({ answer: "This is a test response from the API!" });
// }




// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ answer: "Only POST requests are allowed" });
//   }

//   const { question } = req.body;

//   if (!question || typeof question !== "string") {
//     return res.status(400).json({ answer: "Invalid question." });
//   }

//   try {
//     const n8nWebhookURL = "https://qubezz.app.n8n.cloud/webhook-test/chatbot";

//     const response = await fetch(n8nWebhookURL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ question }),
//     });

//     const data = await response.json();


//     res.status(200).json({ answer: data.answer || "No answer returned." });
//   } catch (err) {
//     console.error("Error calling n8n:", err);
//     res.status(500).json({ answer: "Error reaching n8n." });
//   }
// }


// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ answer: "Only POST requests are allowed" });
//   }

//   const { question } = req.body;

//   if (!question || typeof question !== "string") {
//     return res.status(400).json({ answer: "Invalid question." });
//   }

//   try {
//     const n8nWebhookURL = "https://qubezz.app.n8n.cloud/webhook-test/chatbot";

//     const response = await fetch(n8nWebhookURL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ question }),
//     });

//     const data = await response.json();

//     return res.status(200).json({ answer: data.answer || "No answer returned." });
//   } catch (err) {
//     console.error("Error calling n8n:", err);
//     return res.status(500).json({ answer: "Error reaching n8n." });
//   }
// }














import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ answer: "Only POST requests are allowed" });
  }

  const { question } = req.body;

  if (!question || typeof question !== "string") {
    return res.status(400).json({ answer: "Invalid question." });
  }

  try {
    const n8nWebhookURL = "https://qubezz.app.n8n.cloud/webhook-test/chatbot";

    const response = await fetch(n8nWebhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();

    res.status(200).json({ answer: data.output || "No answer returned." });
  } catch (err) {
    console.error("Error calling n8n:", err);
    res.status(500).json({ answer: "Error reaching n8n." });
  }
}
