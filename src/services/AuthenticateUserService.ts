
/* 
Receber code(string): string
Recuperar o access_token no github
Verificar se o usuario existe no DB
? SIm=Gera um token : Nao=Cria no DB, gera um token
Retornar o token com as infos do user
*/

class AuthenticateUserService {
  async execute(code: string) {

  }

}

export { AuthenticateUserService }