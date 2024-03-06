import { Box, Skeleton, Stack } from "@mui/material";

export const CardSkeleton = () => {
  return (
    <Stack
      spacing={1}
      sx={{ border: "1px solid grey", borderRadius: 3, width: 345, height: 350, overflow: "hidden" }}
    >
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton
        variant="rectangular"
        width={345}
        height={120}
        animation="wave"
      />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Skeleton variant="text" width={220} height={50} animation="wave" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Skeleton variant="text" width={250} height={40} animation="wave" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Skeleton variant="text" width={200} height={40} animation="wave" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Skeleton
          variant="rectangular"
          width={130}
          height={30}
          animation="wave"
        />
      </Box>
    </Stack>
  );
};
