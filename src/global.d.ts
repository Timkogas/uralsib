interface Window {
    dataLayer: {
      push: (data: {
        event: string;
        eventAction: string;
        eventCategory: string;
        eventLabel?: string;
        // Другие свойства, если необходимо
      }) => void;
    };
  }