interface IPessoaRequest {
  name: string;
  email: string;
  data: string;
}

interface IUserResponse extends IPessoaRequest {
  id: string;
}

interface IPessoaUpdateRequest {
  name?: string;
  email?: string;
  data?: string;
}

export { IPessoaRequest, IUserResponse, IPessoaUpdateRequest };
