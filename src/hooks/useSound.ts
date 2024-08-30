import { useCallback, useRef } from "@rbxts/react";
import { SoundService } from "@rbxts/services";

export interface SoundProps {
	id: string;
	volume?: number;
	playbackSpeed?: number;
}

function createSound({ id, volume = 1, playbackSpeed = 1 }: SoundProps) {
	const sound = new Instance("Sound");
	sound.SoundId = id;
	sound.Volume = volume;
	sound.PlaybackSpeed = playbackSpeed;
	return sound;
}

export function useSound() {
	const soundRefs = useRef<Map<string, Sound>>(new Map());

	const playSound = useCallback(({ id, volume = 1, playbackSpeed = 1 }: SoundProps) => {
		const sound = soundRefs.current.get(id);

		if (sound && sound.IsPlaying) {
			sound.TimePosition = 0;
		} else if (sound) {
			sound.Play();
		} else {
			const newSound = createSound({ id, volume, playbackSpeed });
			newSound.Parent = SoundService;
			soundRefs.current.set(id, newSound);
			newSound.Ended.Connect(() => {
				newSound.Destroy();
				soundRefs.current.delete(id);
			});

			newSound.Play();
		}
	}, []);

	return playSound;
}
