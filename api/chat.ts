import { answerDaikinQuestion } from "../src/server/groqChat";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Metodo no permitido." });
  }

  try {
    const answer = await answerDaikinQuestion(req.body?.question);

    return res.status(200).json({
      answer,
      sources: [],
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error al generar la respuesta.";
    const status = errorMessage === "La pregunta es obligatoria." ? 400 : 500;

    return res.status(status).json({ error: errorMessage });
  }
}
