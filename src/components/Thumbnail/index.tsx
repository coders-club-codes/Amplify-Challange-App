import React, { useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';
import { PLACEHOLDER_IMAGE_URL } from '../../utils/contants';
import { Image } from './styles';

type Props = {
  thumbnailKey?: string | null;
};

export default function Thumbnail({ thumbnailKey }: Props) {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('');

  useEffect(() => {
    async function loadThumbnailUrl() {
      if (thumbnailKey) {
        const thumbnail = await Storage.get(thumbnailKey);
        setThumbnailUrl(thumbnail);
      }
    }

    loadThumbnailUrl();
  }, [thumbnailKey]);

  if (!thumbnailUrl) {
    <Image source={{ uri: PLACEHOLDER_IMAGE_URL }} />;
  }

  if (!thumbnailUrl) {
    return null;
  }

  return <Image source={{ uri: thumbnailUrl }} />;
}
