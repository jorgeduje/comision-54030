import { Skeleton, Stack } from "@mui/material";

export const CardSkeleton = () => {
  return (
    <Stack spacing={1} sx={{border: "2px solid black", width: 250}}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="rectangular" width={250} height={120} animation="wave" />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="text" width={250} height={40} animation="wave" />
      <Skeleton variant="text" width={250} height={40} animation="wave" />
      <Skeleton variant="text" width={250} height={40} animation="wave" />
      <Skeleton variant="rectangular" width={150} height={60} animation="wave" />
    </Stack>
  );
};
