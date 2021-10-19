import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export function ensureAuthenticated
  (request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      errorCode: "token.invalid",
    });
  }

  //Bearer 54asd64as6d54asdasdasdasdas45
  // [0] Bearer
  // [1] 54asd64as6d54asdasdasdasdas45

  const [, token] = authToken.split(" ")

  try {
    const { sub } = verify(token, process.env.JWT_SECRET)

    request.user_id = sub

  } catch (err) {
    return response.status(401).json({ errorCode: "token.expired" })
  }

}
