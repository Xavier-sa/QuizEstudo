import json
import re

texto = """
# **1. (OACP) A administração pública direta é composta por:**

A) Empresas públicas e sociedades de economia mista
B) Órgãos integrados na estrutura da União, Estados, DF e Municípios
C) Autarquias e fundações públicas
D) Entidades paraestatais

✅ **Resposta: B**
**Comentário:**

* **B - Correta.** A administração direta é composta pelos órgãos da União, Estados, DF e Municípios, como ministérios, secretarias e departamentos.
* **A - Errada.** Empresas públicas e sociedades de economia mista fazem parte da administração indireta.
* **C - Errada.** Autarquias e fundações públicas também pertencem à administração indireta.
* **D - Errada.** Entidades paraestatais (como ONGs) não integram a administração direta nem indireta.
"""

# Processamento ajustado para o formato desejado
questoes_brutas = re.split(r'# \*\*\d+\.', texto)
questoes_json = []

for i, questao_raw in enumerate(questoes_brutas[1:], 1):  # Começa de 1 para ignorar o vazio inicial
    if not questao_raw.strip():
        continue

    # Extrai a pergunta
    match_pergunta = re.search(r'\*\*(.*?)\*\*', questao_raw)
    pergunta = f"{i}- {match_pergunta.group(1).strip()}" if match_pergunta else f"Pergunta {i}"

    # Extrai as opções
    opcoes_raw = re.findall(r'([A-D])\)\s(.+?)(?=\n[A-D]\)|\n✅|\n\*\*)', questao_raw, re.DOTALL)
    
    # Encontra a resposta correta
    match_resposta = re.search(r'✅ \*\*Resposta:\s([A-D])\*\*', questao_raw)
    letra_correta = match_resposta.group(1) if match_resposta else None

    # Extrai comentários
    comentarios_raw = re.findall(r'\*\*([A-D])\s-\s(Correta|Errada)\.\*\*\s(.+?)(?=\n\*|\n---|\n✅|$)', questao_raw, re.DOTALL)
    comentarios = {letra: comentario for (letra, _, comentario) in comentarios_raw}

    # Constrói as opções no formato desejado
    opcoes = []
    for letra, texto_opcao in opcoes_raw:
        texto_opcao = texto_opcao.strip()
        opcoes.append({
            "texto": f"{letra}) {texto_opcao}",
            "correta": letra == letra_correta,
            "comentario": comentarios.get(letra, "Comentário não disponível")
        })

    # Adiciona à lista de questões
    questoes_json.append({
        "pergunta": pergunta,
        "opcoes": opcoes
    })

# Gera o JSON final
json_final = "[\n"
for i, questao in enumerate(questoes_json, 1):
    json_final += "  {\n"
    json_final += f'    "pergunta": "{questao["pergunta"]}",\n'
    json_final += '    "opcoes": [\n'
    
    for j, opcao in enumerate(questao["opcoes"]):
        json_final += "      {\n"
        json_final += f'        "texto": "{opcao["texto"]}",\n'
        json_final += f'        "correta": {"true" if opcao["correta"] else "false"},\n'
        json_final += f'        "comentario": "{opcao["comentario"]}"\n'
        json_final += "      }" + ("," if j < len(questao["opcoes"])-1 else "") + "\n"
    
    json_final += "    ]\n"
    json_final += "  }" + ("," if i < len(questoes_json) else "") + "\n\n"

json_final += "]"

# Salva em arquivo
with open("questoes_formatadas.json", "w", encoding="utf-8") as f:
    f.write(json_final)

print("✅ Arquivo 'questoes_formatadas.json' criado com sucesso!")