gsap.registerPlugin(ScrollTrigger);
var view = gsap.timeline();


view.from('.content',{
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
    
})
view.from('.stagger1',{
    y: -50,
    opacity: 0,
    stagger: .3,
    duration: 2,
    ease: Power4.easeOut
} , "-=1.5")

ScrollTrigger.matchMedia({
    "(min-width: 1050px) and (max-width: 1524px)" : function()
    {
        view.from('.hero-design',{
            y: 50,
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut
        } , "-=2")
        
        gsap.from(".circle-desgin" , {
            stagger:.15,
            scale: .1,
            duration:1,
            ease: "bounce.out",
        })
        gsap.from(".transition2" , {
           scrollTrigger: {
               trigger: 'transition2',
               start: "center center",
           },
           y: 50,
           opacity: 0,
           duration: 1.2,
           stagger: .3
        })
        gsap.from(".transition3" , {
            scrollTrigger: {
                trigger: 'transition3',
                start: "bottom center",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .5
         })
         gsap.from(".transition4" , {
            scrollTrigger: {
                trigger: 'transition4',
                start: "200% center",
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: .3
         })
    } ,
    "(min-width: 1525px) and (max-width: 1900px)" : function()
    {
        view.from('.hero-design',{
            y: 50,
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut
        } , "-=2")
        
        gsap.from(".circle-desgin" , {
            stagger:.15,
            scale: .1,
            duration:1,
            ease: "bounce.out",
        })
        gsap.from(".transition2" , {
           scrollTrigger: {
               trigger: 'transition2',
               start: "center center",
           },
           y: 50,
           opacity: 0,
           duration: 1.2,
           stagger: .3
        })
        gsap.from(".transition3" , {
            scrollTrigger: {
                trigger: 'transition3',
                start: "bottom center",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .5
         })
        gsap.from(".transition4" , {
            scrollTrigger: {
                trigger: 'transition4',
                start: "2100 center",
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: .3
         })
    },
    "(min-width: 1901px) and (max-width: 2200px)" : function()
    {
        view.from('.hero-design',{
            y: 50,
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut
        } , "-=2")
        
        gsap.from(".circle-desgin" , {
            stagger:.15,
            scale: .1,
            duration:1,
            ease: "bounce.out",
        })
        gsap.from(".transition2" , {
           scrollTrigger: {
               trigger: 'transition2',
               start: "center center",
           },
           y: 50,
           opacity: 0,
           duration: 1.2,
           stagger: .3
        })
        gsap.from(".transition3" , {
            scrollTrigger: {
                trigger: 'transition3',
                start: "bottom center",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .5
         })
        gsap.from(".transition4" , {
            scrollTrigger: {
                trigger: 'transition4',
                start: "1800 center",
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: .3
         })
    },
    "(min-width: 2201px)" : function()
    {
        view.from('.hero-design',{
            y: 50,
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut
        } , "-=2")
        
        gsap.from(".circle-desgin" , {
            stagger:.15,
            scale: .1,
            duration:1,
            ease: "bounce.out",
        })
        gsap.from(".transition2" , {
           scrollTrigger: {
               trigger: 'transition2',
               start: "center center",
           },
           y: 50,
           opacity: 0,
           duration: 1.2,
           stagger: .3
        })
        gsap.from(".transition3" , {
            scrollTrigger: {
                trigger: 'transition3',
                start: "bottom center",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .5
         })
        gsap.from(".transition4" , {
            scrollTrigger: {
                trigger: 'transition4',
                start: "2000 center",
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: .3
         })
    },
    "(min-width: 950px) and (max-width: 1049px)" : function()
    {
        view.from('.hero-design',{
            y: 50,
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut
        } , "-=2")
        
        gsap.from(".circle-desgin" , {
            stagger:.15,
            scale: .1,
            duration:1,
            ease: "bounce.out",
        })
        gsap.from(".transition2" , {
           scrollTrigger: {
               trigger: 'transition2',
               start: "center center",
           },
           y: 50,
           opacity: 0,
           duration: 1.2,
           stagger: .3
        })
        gsap.from(".transition3" , {
            scrollTrigger: {
                trigger: 'transition3',
                start: "bottom center",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .5
         })
        gsap.from(".transition4" , {
            scrollTrigger: {
                trigger: 'transition4',
                start: "3100 center",
            
            },
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: .3
         })
    },
    "(min-width: 800px) and (max-width: 949px)" : function()
    {
        view.from('.hero-design',{
            y: 50,
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut
        } , "-=2")
        
        gsap.from(".circle-desgin" , {
            stagger:.15,
            scale: .1,
            duration:1,
            ease: "bounce.out",
        })
        gsap.from(".transition2" , {
           scrollTrigger: {
               trigger: 'transition2',
               start: "center center",
           },
           y: 50,
           opacity: 0,
           duration: 1.2,
           stagger: .3
        })
        gsap.from(".transition3" , {
            scrollTrigger: {
                trigger: 'transition3',
                start: "bottom center",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .5
         })
        gsap.from(".transition4" , {
            scrollTrigger: {
                trigger: 'transition4',
                start: "3200 center",
                
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: .3
         })
    },
    "(min-width: 700px) and (max-width: 799px)" : function()
    {
        view.from('.hero-design',{
            y: 50,
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut
        } , "-=2")
        
        gsap.from(".circle-desgin" , {
            stagger:.15,
            scale: .1,
            duration:1,
            ease: "bounce.out",
        })
        gsap.from(".transition2" , {
           scrollTrigger: {
               trigger: 'transition2',
               start: "center center",
           },
           y: 50,
           opacity: 0,
           duration: 1.2,
           stagger: .3
        })
        gsap.from(".transition3" , {
            scrollTrigger: {
                trigger: 'transition3',
                start: "bottom center",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .5
         })
        gsap.from(".transition4" , {
            scrollTrigger: {
                trigger: 'transition4',
                start: "3100 center",
                
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: .3
         })
    },
    "(min-width: 600px) and (max-width: 699px)" : function()
    {
        view.from('.hero-design',{
            y: 50,
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut
        } , "-=2")
        
        gsap.from(".circle-desgin" , {
            stagger:.15,
            scale: .1,
            duration:1,
            ease: "bounce.out",
        })
        gsap.from(".transition2" , {
           scrollTrigger: {
               trigger: 'transition2',
               start: "center center",
           },
           y: 50,
           opacity: 0,
           duration: 1.2,
           stagger: .3
        })
        gsap.from(".transition3" , {
            scrollTrigger: {
                trigger: 'transition3',
                start: "bottom center",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .5
         })
        gsap.from(".transition4" , {
            scrollTrigger: {
                trigger: 'transition4',
                start: "3250 center",
               
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: .3
         })
    },
    "(min-width: 500px) and (max-width: 599px)" : function()
    {
        view.from('.hero-design',{
            y: 50,
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut
        } , "-=2")
        
        gsap.from(".circle-desgin" , {
            stagger:.15,
            scale: .1,
            duration:1,
            ease: "bounce.out",
        })
        gsap.from(".transition2" , {
           scrollTrigger: {
               trigger: 'transition2',
               start: "center center",
           },
           y: 50,
           opacity: 0,
           duration: 1.2,
           stagger: .3
        })
        gsap.from(".transition3" , {
            scrollTrigger: {
                trigger: 'transition3',
                start: "bottom center",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .5
         })
        gsap.from(".transition4" , {
            scrollTrigger: {
                trigger: 'transition4',
                start: "3350 center",
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: .3
         })
    },
    "(min-width: 400px) and (max-width: 499px)" : function()
    {
        view.from('.hero-design',{
            y: 50,
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut
        } , "-=2")
        
        gsap.from(".circle-desgin" , {
            stagger:.15,
            scale: .1,
            duration:1,
            ease: "bounce.out",
        })
        gsap.from(".transition2" , {
           scrollTrigger: {
               trigger: 'transition2',
               start: "center center",
           },
           y: 50,
           opacity: 0,
           duration: 1.2,
           stagger: .3
        })
        gsap.from(".transition3" , {
            scrollTrigger: {
                trigger: 'transition3',
                start: "bottom center",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .5
         })
        gsap.from(".transition4" , {
            scrollTrigger: {
                trigger: 'transition4',
                start: "3650 center",
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: .3
         })
    },
    "(min-width: 300px) and (max-width: 399px)" : function()
    {
        view.from('.hero-design',{
            y: 50,
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut
        } , "-=2")
        
        gsap.from(".circle-desgin" , {
            stagger:.15,
            scale: .1,
            duration:1,
            ease: "bounce.out",
        })
        gsap.from(".transition2" , {
           scrollTrigger: {
               trigger: 'transition2',
               start: "center center",
           },
           y: 50,
           opacity: 0,
           duration: 1.2,
           stagger: .3
        })
        gsap.from(".transition3" , {
            scrollTrigger: {
                trigger: 'transition3',
                start: "1400 center",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .5
         })
        gsap.from(".transition4" , {
            scrollTrigger: {
                trigger: 'transition4',
                start: "3675 center",
                
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: .3
         })
         
    },
});

