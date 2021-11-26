import { parseUrl } from './parseUrl';

const isSameHostname = (a: URL, b: URL) => a.hostname === b.hostname;
const isSameProtocol = (a: URL, b: URL) => a.protocol === b.protocol;
const isSamePort = (a: URL, b: URL) => a.port === b.port;

class ValidationDTO {
  hostname = true;
  protocol = true;
  port = true;

  invalidate(target: 'hostname' | 'protocol' | 'port') {
    this[target] = false;
  }

  get isValid() {
    return this.hostname && this.protocol && this.port;
  }
}

export const isSameOrigin = (originA: string, originB: string): ValidationDTO => {
  const urlA = parseUrl(originA);
  const urlB = parseUrl(originB);
  const dto = new ValidationDTO();

  if (!isSameHostname(urlA, urlB)) {
    dto.invalidate('hostname');
  }

  if (!isSameProtocol(urlA, urlB)) {
    dto.invalidate('protocol');
  }

  if (!isSamePort(urlA, urlB)) {
    dto.invalidate('port');
  }

  return dto;
};
