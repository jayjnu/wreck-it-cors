import {parseUrl} from "./parseUrl";

const isSameHostname = (a: URL, b: URL) => a.hostname === b.hostname;
const isSameProtocol = (a: URL, b: URL) => a.protocol === b.protocol;
const isSamePort = (a: URL, b: URL) => a.port === b.port

export const isSameOrigin = (originA: string, originB: string): boolean => {
  const urlA = parseUrl(originA);
  const urlB = parseUrl(originB);

  if (!isSameHostname(urlA, urlB)) {
    return false;
  }

  if (!isSameProtocol(urlA, urlB)) {
    return false;
  }

  if (!isSamePort(urlA, urlB)) {
    return false;
  }

  return true;
};
