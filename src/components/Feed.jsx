import React, { useEffect, useState } from "react";
importory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2023 Ajiboye
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
