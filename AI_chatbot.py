from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

Model_Selected = "Meta-Llama-3.1-70B-Instruct"
api_OLA_key = os.getenv("Krutim_API_Key")
if not api_OLA_key:
    raise ValueError("API key not found! Make sure it's set in your .env file.")
openai = OpenAI(api_key=api_OLA_key, base_url="https://cloud.olakrutrim.com/v1")

prompt = "give me a very philosophical statement that would make me think"

response = openai.chat.completions.create(
        model=Model_Selected, 
        messages=[{"role": "user", "content": prompt}])
AI_response = response.choices[0].message.content

print(AI_response)