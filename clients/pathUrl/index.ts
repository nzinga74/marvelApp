import { APIKEYS } from "../Constants/index";
export const comicPath = `/comics?ts=${APIKEYS.ts}&apikey=${APIKEYS.apikey}&hash=${APIKEYS.hash}`;
export const caracterPath = `/characters?ts=${APIKEYS.ts}&apikey=${APIKEYS.apikey}&hash=${APIKEYS.hash}`;
export const requestParams = `?ts=${APIKEYS.ts}&apikey=${APIKEYS.apikey}&hash=${APIKEYS.hash}`;
export const comicEspecificPath = `/comics/`;
export const caracterEspecificPath = "/characters/";
