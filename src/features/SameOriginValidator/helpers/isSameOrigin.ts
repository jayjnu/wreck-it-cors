import { parseUrl } from './parseUrl';

type ValidatorFunction = (a: URL, b: URL) => boolean;

const isSameHostname: ValidatorFunction = (a, b) => a.hostname === b.hostname;
const isSameProtocol: ValidatorFunction = (a, b) => a.protocol === b.protocol;
const isSamePort: ValidatorFunction = (a, b) => a.port === b.port;

export class ValidationDTO {
  hostname = true;
  protocol = true;
  port = true;

  invalidate(target: 'hostname' | 'protocol' | 'port'): void {
    this[target] = false;
  }

  get isValid(): boolean {
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
