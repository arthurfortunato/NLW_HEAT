import axios from 'axios';
/* 
Receber code(string): string;
Recuperar o access_token no github;
Verificar se o usuario existe no DB;
? SIm=Gera um token : Nao=Cria no DB, gera um token;
Retornar o token com as infos do user;
*/

class AuthenticateUserService {
  async execute(code: string) {
    const url = 'https://api.github.com/login/oauth/access_token';

    const response = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        'Accept': 'application/json'
      }
    })

    return response.data;
  }

}

export { AuthenticateUserService }