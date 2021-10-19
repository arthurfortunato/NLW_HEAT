import axios from 'axios';
import prismaClient from '../prisma';
/* 
Receber code(string): string;
Recuperar o access_token no github;
Recuperar infos do user no github;
Verificar se o usuario existe no DB;
? SIm=Gera um token : Nao=Cria no DB, gera um token;
Retornar o token com as infos do user;
*/

interface IAccessTokenResponse {
  access_token: string;
}

interface IUserResponse {
  avatar_url: string,
  login: string,
  id: number,
  name: string
}

class AuthenticateUserService {
  async execute(code: string) {
    const url = 'http://github.com/login/oauth/access_token';

    const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        'Accept': 'application/json'
      }
    })

    const response = await axios.get<IUserResponse>('https://api.github.com/user', {
      headers: {
        authorization: `Bearer ${accessTokenResponse.access_token}`
      }
    })

    const { login, id, avatar_url, name } = response.data;

    const user = await prismaClient.user.findFirst({
      where: {
        github_id: id
      }
    })
  }

}

export { AuthenticateUserService }