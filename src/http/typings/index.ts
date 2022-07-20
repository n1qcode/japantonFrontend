export interface IUserProps {
  id: number,
  name: string,
  email: string,
  email_verified_at: null,
  created_at: string,
  updated_at: string
}

export interface AuthResponse {
  access_token: string,
  token_type: string,
  expires_in: number,
  user: IUserProps
}
