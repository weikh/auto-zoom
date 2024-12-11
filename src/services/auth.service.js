import { useMutation } from 'react-query';
import httpRequestAuth from './httpRequestAuth/index';

const authService = {
	login: (data) => httpRequestAuth.post('auth/signin', data),
};


export const useLoginMutation = (mutationSettings) => {
	return useMutation((data) => authService.login(data), mutationSettings);
};
