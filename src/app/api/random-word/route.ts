export async function GET() {
  const words = ['Ooga', 'Booga', 'Jalapeno', 'Cheese', 'Turtle', 'Bingus'];

  const index = Math.floor(Math.random() * words.length);

  const randomWord = words[index];

  return Response.json({ randomWord });
}
