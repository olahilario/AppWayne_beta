README

1) Instale o Node Js  ¯\_(ツ)_/¯
Geralmente ele já instala o NPM junto. Também precisaremos dele, obviamente.
https://nodejs.org/en/download/prebuilt-installer

2) Abra o VS Code e nele abra a pasta AppWayne

3) Precisaremos de DUAS janelas de terminal, uma para inicializar o backend e outra para o frontend

3.1)v1 Inicializando o ambiente virtual incluso na pasta e o servidor: Execute os 3 comandos a seguir, uma linha por vez:

cd .\backend

.venv\Scripts/activate

pip install -r requirements.txt

python .\manage.py runserver

3.1)v2 Caso prefira criar seu próprio ambiente virtual, os commandos são:

cd .\backend

python -m venv .venv

.venv\Scripts/activate

pip install -r requirements.txt

python .\manage.py runserver


3.2) Inicializando o frontend (EM OUTRA JANELA DO TERMINAL):
Execute os 3 comandos a seguir, uma linha por vez:

cd .\frontend

npm install

npm run dev

4) Se tudo corer bem, você verá algo parecido com isso aqui:
> mywaynesoftware@0.0.0 dev
> vite


  VITE v5.4.7  ready in 197 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

Basicamente você abre esse endereço aqui: http://localhost:5173/

E se tudo corer bem, verá uma tela de login.

Você pode fazer o seu cadastro com o seu email de preferência.
Se clicar nesse morcego ao lado do formulário de login,
entenderá um pouco do que pretendi no projeto.

Também existem os Logins dos nossos personagens:

batman@wayne.com
senha: gothancity

alfred@wayne.com
hitchcock

fox@wayne.com
Senhadofox-07

MAS, porém, contudo, todavia... Ainda não deu tempo de criar os grupos
para restringir as views de cada um deles.

Pela interface do Django admin, eu calculei que seria mais fácil.
Mas como foquei muito numa autenticação segura com token e armazenamento de senhas em hash...
Acabei complexificando demais o meu model que os usuários autenticados herdam permissões.
Enfim. É um angú de coisas críticas que seria arriscado manipular NO DIA DE ENTREGAR! Hahahaha!

Mas de toda forma eu restringiria essas permissões apenas aos três: Batman, Alfred e Fox.
Para facilitar a navegação e a avaliação, é interessante que o seu registro
garanta permissões para acessar todas as áreas e funcionalidades do site.
O prazo de expiração do token também está de 10 horas para evitar que o login se expire a todo instante.
(o que foi muito útil no processo de desenvolvimento. Hehehe!)

Obs: Perdão por alguns css inline em alguns dos componentes. Sei que não é boa prática.
Mas esse projeto foi tipo trocar as 4 rodas do carro andando. Então também peço desculpas por alguma bagunça no código.
Realmente fui aprendendo e fazendo. E isso acaba se refletindo em alguma confusão na lógica dos components.
Na real o react e as bibliotecas de react já misturam taaaanta coisa que a gente fica até mais à vontade pra zonear a coisa! Hahahah!

Futuramente pretendo melhorar a responsividade do site (não fiz o deploy pra ver como está rodando em celular), além de implementar esse controle das views de acordo com o grupo de usuários logados.

Qualquer dúvida ou bug, pode me mandar mensagem dia e noite no whatsapp!

Obrigado.

Pedro Hilário
31 9 99930259
https://github.com/olahilario



