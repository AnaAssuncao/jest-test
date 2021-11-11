import {jest} from '@jest/globals'

import SoundPlayer from './sound-player.js';
import SoundPlayerConsumer from './sound-player-consumer.js';

jest.mock('./sound-player.js'); // SoundPlayer is now a mock constructor

it('Nós podemos verificar se o consumidor chamou o construtor de classe', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('Nós podemos verificar se o consumidor chamou um método na instância da classe', () => {
  // Mostra que mockClear() está funcionando:
  expect(SoundPlayer).not.toHaveBeenCalled();

  const soundPlayerConsumer = new SoundPlayerConsumer();
  // Construtor deve ter sido chamado novamente:
  expect(SoundPlayer).toHaveBeenCalledTimes(1);

  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();

  // mock.instances está disponível com simulações automáticas:
  const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
  // Equivalente a verificação acima:
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});