import { Convert } from './convert';

describe('Convert', () => {
  it('should return mp3 file extension', () => {
    expect(Convert.getExtension('audio/mp3')).toEqual('mp3');
  });

  it('should return null file extension', () => {
    expect(Convert.getExtension('audio/mp20')).toEqual(null);
  });
  it('should return null file extension', () => {
    expect(Convert.getExtensions('audio/mp4')).toHaveSize(2);
  });
});
