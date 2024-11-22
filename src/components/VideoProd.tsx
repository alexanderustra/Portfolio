const VideoLoop = (route:string) => {
  return (
    <div style={{ width: "100%", height: "auto", overflow: "hidden" }}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        style={{ width: "100%", objectFit: "cover" }} 
      >
        <source src={route} type="video/mp4" />
        Tu navegador no soporta reproducción de videos.
      </video>
    </div>
  );
};


interface YouTubeEmbedProps {
    route: string;
  }
  
  const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ route }) => {
    return (
      <div style={{ width: "100%", height: "auto", overflow: "hidden" }}>
        <iframe
          width="560"
          height="315"
          src={route}
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ width: "100%", height: "auto", border: "none", borderRadius:'5px', marginTop:'15px' }}
        ></iframe>
      </div>
    );
  };

export {VideoLoop ,YouTubeEmbed};
