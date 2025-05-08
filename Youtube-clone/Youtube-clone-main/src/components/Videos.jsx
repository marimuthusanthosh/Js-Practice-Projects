import React from 'react';
import {Stack,Box,Typography} from '@mui/material';
import {VideoCard,ChannelCard} from './';
const Videos = ({ videos ,direction}) => {
 
  if(!videos?.length) return 'Loading...';

  return (
    <div>
      <Stack direction={ direction ||"row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos?.length > 0 ? (
          videos.map((item, idx) => (
            <Box key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          ))
        ) : (
          <Typography variant="h6" color="white">
            No videos available
          </Typography>
        )}
      </Stack>
    </div>
  );
}; 
export default Videos;

