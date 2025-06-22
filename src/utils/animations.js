export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

export const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
};

export const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
};

export const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

export const fadeInWithSlideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const scaleUpWithFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Professional portfolio animation with subtle slide and fade
export const professionalSlideIn = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Professional container with staggered children
export const professionalContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
      when: "beforeChildren"
    }
  }
};

// Tech showcase animation with dynamic pop-in effect
export const techPopIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.3,
    rotate: -180,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.8
    }
  }
};

// Tech container with faster staggered children for grid layout
export const techContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.08,
      when: "beforeChildren"
    }
  }
};

// Smooth scale-in for tech filter buttons
export const techButtonSlide = {
  hidden: { 
    opacity: 0, 
    x: -30,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 12,
      duration: 0.6
    }
  }
};

// Professional project showcase animation
export const projectSlideIn = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Professional project container with elegant staggering
export const projectContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.12,
      when: "beforeChildren"
    }
  }
};

// Elegant fade-up for project elements
export const projectFadeUp = {
  hidden: { 
    opacity: 0, 
    y: 25 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Professional contact animation with elegant slide-in
export const contactSlideIn = {
  hidden: { 
    opacity: 0, 
    y: 35,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 80,
      damping: 20
    }
  }
};

// Contact container with refined staggering
export const contactContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

// Smooth form input animation
export const contactFormInput = {
  hidden: { 
    opacity: 0, 
    x: -20,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Contact info item animation
export const contactInfoItem = {
  hidden: { 
    opacity: 0, 
    x: -30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 120,
      damping: 15
    }
  }
};

// Professional footer animation with elegant fade-up
export const footerSlideUp = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 90,
      damping: 18
    }
  }
};

// Footer container with elegant staggering
export const footerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.12,
      when: "beforeChildren"
    }
  }
};

// Footer link animation
export const footerLinkSlide = {
  hidden: { 
    opacity: 0, 
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Footer social icon animation
export const footerSocialIcon = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 150,
      damping: 12
    }
  }
};