interface IPessoaRequest {
  nome: string;
  email: string;
  data: string;
}

interface IUserResponse extends IPessoaRequest {
  id: string;
}

interface IPessoaUpdateRequest {
  nome?: string;
  email?: string;
  data?: string;
}

export { IPessoaRequest, IUserResponse, IPessoaUpdateRequest };
