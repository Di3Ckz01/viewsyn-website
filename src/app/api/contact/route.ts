import { NextResponse } from "next/server";

type ContactPayload = { name?: string; company?: string; email?: string; phone?: string; message?: string };

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name?.trim() || !body.company?.trim() || !body.email?.trim() || !body.message?.trim()) {
    return NextResponse.json({ message: "Completa nombre, empresa, correo y mensaje." }, { status: 400 });
  }

  const endpoint = process.env.CONTACT_API_URL;

  if (!endpoint) {
    return NextResponse.json({ message: "El canal de contacto aún está en configuración. Intenta nuevamente más tarde." }, { status: 503 });
  }

  try {
    const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), cache: "no-store" });
    if (!response.ok) return NextResponse.json({ message: "No fue posible procesar tu solicitud en este momento." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "No fue posible enviar tu solicitud en este momento." }, { status: 502 });
  }
}
