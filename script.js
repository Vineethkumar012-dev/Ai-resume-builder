const API_KEY = "Your_API_Key_Here";

async function generate(){
  let name = document.getElementById("name").value;
  let skills = document.getElementById("skills").value;
  let output = document.getElementById("output");
  output.innerText = "AI Has Thinking... Please Wait...";

  let res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${API_KEY}`, {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      contents:[{parts:[{text: `Write a professional resume summary for a student named ${name} with skills ${skills}. In 3 lines.`}]}]
    })
  });
  let data = await res.json();
  output.innerText = data.candidates[0].content.parts[0].text;
}
