import {
    Assets,
    ChoiceMenuOption,
    moveIn,
    moveOut,
    narration,
    newLabel,
    showImage,
} from "@drincs/pixi-vn";
import { mc, brian, coolBrian, teacherBrian, baseballBrian, rainBrian, girlBrian } from "../values/characters";
// import { animation01 } from "./animations-labels";
import { sound } from '@drincs/pixi-vn'

let s1 = sound.add('like', '/shrimp-story/audio/i_like_you.mp3');
let s2 = sound.add('kai', '/shrimp-story/audio/kai.mp3');
let s3 = sound.add('nae', '/shrimp-story/audio/nae.mp3');
let s4 = sound.add('rain', '/shrimp-story/audio/raining.mp3');
let s5 = sound.add('only', '/shrimp-story/audio/only.mp3');

const startLabel = newLabel(
    "start",
    [
        async () => {
            // await showImage("bg", "bg01-hallway");
            
            narration.dialogue = { 
                character: mc, 
                text: `Huh... Where am I? I feel so dizzy. Why can't I see` };
        },
        async () => {
            narration.dialogue = { 
                character: mc, 
                text: `Wait I can't move either?!` };
        },
        async () => {
            narration.dialogue = {
                character: brian,
                text: `Hehehehe`,
            };
        },
        async () => {
            narration.dialogue = { 
                character: mc, 
                text: `Who are you?` };
        },
        async () => {
            narration.dialogue = {
                character: brian,
                text: `I am what you wish for. I am all that you need.`,
            };
        },
        async () => {
            narration.dialogue = { 
                character: mc, 
                text: `Vegtables?` };
        },
        async () => {
            narration.dialogue = {
                character: brian,
                text: `...  No. Although one can say I am tasty.`,
            };
        },
        async () => {
            narration.dialogue = `Takes blindfold off`;
        },
        async () => {
            await showImage("bg", "bg01-basement");
            await moveIn(
                "brian",
                {
                    value: ["brian1"],
                    options: { xAlign: 0.5, yAlign: .4},
                },
                { direction: "right", speed: 300 }
            );
            await moveIn(
                "brian",
                {
                    value: ["brian1"],
                    options: { xAlign: 0.5, yAlign: .4},
                },
                { direction: "right", speed: 300 }
            );
            narration.dialogue = { 
                character: mc, 
                text: `!!!!!` };
           
        },
        
        async () => {
            narration.dialogue = { 
                character: mc, 
                text: `宝贝?!` };
        },
        async () => {
            narration.dialogue = {
                character: brian,
                text: `Yes 宝贝`,
            };
        },
        
        async () => {
            await moveOut("brian", { direction: "right", speed: 50000 });
            await moveIn(
                "brian2",
                {
                    value: ["brian2"],
                    options: { xAlign: 0.5, yAlign: .4},
                },
                { direction: "left", speed: 50000 }
            );
            narration.dialogue = {
                character: brian,
                text: `Now smile for me.`,
            };
        },
        async () => {
            narration.dialogue = `Click`;
        },
        async () => {
            await moveOut("brian2", { direction: "right", speed: 50000 });
            await moveIn(
                "brian",
                {
                    value: ["brian1"],
                    options: { xAlign: 0.5, yAlign: .4},
                },
                { direction: "right", speed: 50000 }
            );
            narration.dialogue = {
                character: brian,
                text: `Good. Good. PERFECT. This will be a great memory would you not say?`,
            };
        },
        async () => {
            narration.dialogue = { 
                character: mc, 
                text: `Why are you doing this?` };
        },
        async () => {
            narration.dialogue = {
                character: brian,
                text: `Oh you should know why. Now Listen carefully so that I do not have to repeat myself.`,
            };
        },
        async () => {
            narration.dialogue = {
                character: brian,
                text: `You have two simple options.`,
            };
            
            narration.choiceMenuOptions = [
                new ChoiceMenuOption("Accept Me", acceptMe, {}, { type: "jump" }),
                new ChoiceMenuOption("Reject Me", rejectMe, {}, { type: "jump" }),
                new ChoiceMenuOption("What did you say again?", sayAgain, {}, { type: "jump" })
            ];
        },
        
    ],
    {
        onLoadingLabel: () => {
            Assets.load([
                "bg01-basement",
                "bg02-bedroom",
                "brian1",
                "brian2",
                "brianCool1",
                "brianCool2",
                "brianCool3",
                "brianBase1",
                "brianBase2",
                "brianBase3",
                "brianGirl1",
                "brianGirl2",
                "brianRain1",
                "brianRain2",
                "brianRain3",
                "brianTeacher1",
                "brianTeacher2"
  
            ]);
        },
    }
);
export default startLabel;

const acceptMe = newLabel("accept_me", [
    async () => {
        narration.dialogue = `10 years have passed`;
    },
    async () => {
        narration.dialogue = { 
            character: brian, 
            text: `I don’t remember a lot from that night. Now I wake up to the sight of 
            a cat and my beloved shrimp. Thank you for accepting my offer. I expected you 
            to reject me, oh well I guess you enjoy those things. As you learn and grow, 
            you’ll learn that a lot of things are absolute, even though they may seem 
            fragile today. Like how you are always going to make me laugh. How you are 
            always going to be my one. And of course, how I will always be taller than. 
            Yup Yup.... But I’ll never be above you, nor below you. I’ll always be by your 
            side. Happy anniversary!` };

    },
    async () => {
        narration.dialogue = `The End`;
    },
    narration.onGameEnd = async (props) => {
        props.navigate("/end")
    }
]);

const sayAgain = newLabel("say_again", [
    async () => {
        narration.dialogue = { 
            character: brian, 
            text: `Do I really talk that quietly? Huh oh well.`
        };

    },
    async () => {
        narration.dialogue = { 
            character: brian, 
            text: ` I guess I understand the pain. But I won’t 
            repeat myself again. You are stuck with me, and I get 
            to do whatever I want. At least you were able to spend 
            your last moments with me. Anyways, it was a shame I did 
            not catch her last words. What did she say again?` 
        };

    },
    async () => {
        narration.dialogue = `The End`;
    },
    narration.onGameEnd = async (props) => {
        props.navigate("/end")
    }
]);

const rejectMe = newLabel("reject_me", [
    async () => {
        narration.dialogue = {
            character: mc,
            text: `No, let me out of this place. I don't want to be trapped like this.`,
        };
    },
    async () => {
        narration.dialogue = {
            character: brian,
            text: `*Wrong choice*`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Nooooo`,
        };
        moveOut("brian", { direction: "right", speed: 300 });
    },
    async () => {
        await showImage("bg", "bg02-bedroom");
        narration.dialogue = `Alarm clock uwu noises and knocking`;
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Huh what.`,
        };
    },
    async () => {
        narration.dialogue = {
            character: baseballBrian,
            text: `I am coming in.`,
        };
    },
    async () => {
        await moveIn(
            "brianBase1",
            {
                value: ["brianBase1"],
                options: { xAlign: 0.25, yAlign: .2},
            },
            { direction: "left", speed: 300 }
        );
        narration.dialogue = {
            character: baseballBrian,
            text: `Good Morning. Wake up sleepy head. I made you breakfast and matcha.`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Good Morning. Wait whaat why are you in my room.`,
        };
    },
    async () => {
        await moveOut("brianBase1", { direction: "right", speed: 50000 });

        await moveIn(
            "brianBase2",
            {
                value: ["brianBase2"],
                options: { xAlign: 0.25, yAlign: .2},
            },
            { direction: "left", speed: 50000 }
        );
        narration.dialogue = {
            character: baseballBrian,
            text: `Its Sping Quarter. You do not wnat to be late to your first class now. And I was getting worried since you slept for over 12 hours.`,
        };
    },
    async () => {
        await moveOut("brianBase2", { direction: "left", speed: 200 });

        narration.dialogue = {
            character: baseballBrian,
            text: `I need to go to class too. Make sure to eat.`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Okay.`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Hmmmm last night...`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Must of been a dream.`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Hey Cinnamoroll... wait... I forgot what I dreamt about. But it felt so real`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Ahhh, its already 2:00 pm. I need to get ready to go to my cs 171 class. Ahhh, Schindler would be so dissapointed in me.`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Teeth, bathroom, shower, breakfast. No no, What am I thinking. I need to be thinking about the shortest path to class.`,
        };
    },
    async () => {
        await showImage("bg", "bg03-campus");
        narration.dialogue = {
            character: mc,
            text: `Hopefully I won't be late.`,
        };
    },
    async () => {
        await moveIn(
            "coolBrian1",
            {
                value: ["brianCool1"],
                options: { xAlign: 0.25, yAlign: .4},
            },
            { direction: "left", speed: 300 }
        );
        narration.dialogue = `*Bumps into a tall person. Falls into thier arms*`;
    },
    async () => {
        narration.dialogue = {
            character: coolBrian,
            text: `Whoa! You okay?`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `I was to focus... wait why does his chest feel so warm.`,
        };
    },
    async () => {
        narration.dialogue = `*Looks Up*`;
        
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `*Wow he is so tall.* Yea thank you for saving me. I am going to be late for Shindler.`,
        };
    },
    async () => {
        await moveOut("coolBrian1", { direction: "right", speed: 50000 });
        await moveIn(
            "coolBrian2",
            {
                value: ["brianCool2"],
                options: { xAlign: 0.25, yAlign: .4},
            },
            { direction: "left", speed: 50000 }
        );
        narration.dialogue = {
            character: coolBrian,
            text: `Oh I also have Shindler. Our fates must align.`,
        };
    },
    async () => {
        await moveOut("coolBrian2", { direction: "right", speed: 50000 });
        await moveIn(
            "coolBrian3",
            {
                value: ["brianCool3"],
                options: { xAlign: 0.25, yAlign: .4},
            },
            { direction: "left", speed: 50000 }
        );
        narration.dialogue = {
            character: mc,
            text: `Oh cool. What's your name?`,
        };
    },
    async () => {
        narration.dialogue = {
            character: coolBrian,
            text: `Your Pookie *cough cough* My name is Brian. Do you want to walk together?`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Sure, but lets run.`,
        };
    },
    async () => {
        await moveOut("coolBrian3", { direction: "right", speed: 100 });
        narration.dialogue = {
            character: mc,
            text: `*I can't stop thinking about his height as I trail behind him... His strong arms* `,
        };
    },
    async () => {
        narration.dialogue = `Arrives to class late`;
    },
    async () => {
        await moveIn(
            "coolBrian1",
            {
                value: ["brianCool1"],
                options: { xAlign: 0.75, yAlign: .4},
            },
            { direction: "left", speed: 100 }
        );
        narration.dialogue = {
            character: coolBrian,
            text: `Looks like lecture has not started yet.`,
        };
    },
    async () => {
        await moveIn(
            "brianTeacher2",
            {
                value: ["brianTeacher2"],
                options: { xAlign: 0.1, yAlign: .4},
            },
            { direction: "right", speed: 100 }
        );
        narration.dialogue = {
            character: teacherBrian,
            text: `Hello. My name is professor Le. I will be subbing in for Shindler.`,
        };
    },
    async () => {  
        narration.dialogue = {
            character: teacherBrian,
            text: `If you were wondering, Shindler is on paternity leave. Do not ask why Gassko is on paternity leave too.`,
        };
    },
    async () => {  
        narration.dialogue = {
            character: teacherBrian,
            text: `If you were wondering, Shindler is on paternity leave. Do not ask why Gassko is on paternity leave too.`,
        };
    },
    async () => {
        narration.dialogue = `You accidently fall asleep`;
    },
    async () => {
        narration.dialogue = {
            character: coolBrian,
            text: `Pst wake up. He might start asking questions.`,
        };
    },
    async () => {  
        narration.dialogue = {
            character: teacherBrian,
            text: `But now since we have proved that age is just a number …`,
        };
    },
    async () => {  
        narration.dialogue = {
            character: teacherBrian,
            text: `Hey you, you have something to tell to the class?`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `No sir!`,
        };
    },
    async () => {  
        narration.dialogue = {
            character: teacherBrian,
            text: `Good girl. Not another word from you. See me after class. Now class can anyone explain why Gassko is so hot...`,
        };
    },
    async () => {
        await moveOut("brianTeacher2", { direction: "right", speed: 50000 });
        narration.dialogue = `45 mins has passed and people are exiting`;
    },
    async () => {

        narration.dialogue = {
            character: coolBrian,
            text: `I feel like I did not learn anything. Maybe I am a bit too innocent.`,
        };
    },
    async () => {
        await moveOut("coolBrian1", { direction: "right", speed: 100 });

        narration.dialogue = {
            character: coolBrian,
            text: `I have to go, lets meet up next lecuture!`,
        };
    },
    async () => {
        await moveIn(
            "brianTeacher1",
            {
                value: ["brianTeacher1"],
                options: { xAlign: 0.5, yAlign: .4},
            },
            { direction: "right", speed: 100 }
        );
        narration.dialogue = {
            character: teacherBrian,
            text: `Hey, have a seat. I have been looking under your profile.`,
        };
    },
    async () => {
        narration.dialogue = {
            character: teacherBrian,
            text: `You have potential for someone your age. Do you know anything AI?`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `No much`,
        };
    },
    async () => {
        narration.dialogue = {
            character: teacherBrian,
            text: `Really!? I assumed you were a deep learning model because you just activated my softmax layer.`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Are you trying to rizz me up?`,
        };
    },
    async () => {
        narration.dialogue = {
            character: teacherBrian,
            text: `Depends. Do you want to learn how you can Ace this class?`,
        };
        narration.choiceMenuOptions = [
            new ChoiceMenuOption("Call the Police", police, {}, { type: "jump" }),
            new ChoiceMenuOption("Leave to go eat", rain, {}, { type: "jump" })
        ];
    },
    
    
]);


const police = newLabel("police", [
    async () => {
        await moveOut("brianTeacher1", { direction: "right", speed: 50000 });
        narration.dialogue = `You avoided danger but you never learned AI. With how the world turned out after ChatGPT took over every 
        software job, you know live in the outbacks farming wheat and corn. Atleast it is a peaceful life. `;
    },
    async () => {
        narration.dialogue = `The End`;
    },
    narration.onGameEnd = async (props) => {
        props.navigate("/end")
    }
]);

const rain = newLabel("rain", [
    async () => {
        await moveOut("brianTeacher1", { direction: "right", speed: 50000 });
        narration.dialogue = `You leave but it suddenly started pouring`;
    },
    async () => {
        await showImage("bg", "bg04-busstop");

        narration.dialogue = {
            character: mc,
            text: `Just my luck. Ahhh, I do not have an umbrella!`,
        };
    },
    async () => {
        await moveIn(
            "brianRain2",
            {
                value: ["brianRain2"],
                options: { xAlign: 0.5, yAlign: .4},
            },
            { direction: "left", speed: 100 }
        );
        narration.dialogue = {
            character: mc,
            text: `Phew I just made it under the bustop... looks like I am not alone.`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Hmmmm... what he his looking at. `,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `His eyes. His face. Just my type. `,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `His eyes. His face. Just my type. `,
        };
    },
    async () => { 
        await moveOut("brianRain2", { direction: "right", speed: 50000 });
        await moveIn(
            "brianRain1",
            {
                value: ["brianRain1"],
                options: { xAlign: 0.5, yAlign: .4},
            },
            { direction: "right", speed: 50000 }
        );
        narration.dialogue = {
            character: mc,
            text: `Oop... Hi `,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `I- wasn't looking.`,
        };
    },
    async () => {
        narration.dialogue = `He stares down at you`;
    },
    async () => {
        narration.dialogue = {
            character: rainBrian,
            text: `You must be lost`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `~~Lost in his eyes~~`,
        };
    },
    async () => {
        narration.dialogue = {
            character: rainBrian,
            text: `Take my umbrella`,
        };
    },
    async () => {
        await moveOut("brianRain1", { direction: "right", speed: 50000 });
        narration.dialogue = `He says nothing else and takes the bus`;
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `So dreeaammyy. No, snap out of it. Wait I have his umbrella?`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `I will make sure to return it if we ever cross path again.`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Anyways I need to take the bus to go to my friends karaoke party. Ehhh, I hope I am not late.`,
        };
    },
    async () => {
        narration.dialogue = `Later that night`;
    },
    async () => {
        await showImage("bg", "bg05-karaoke");
        narration.dialogue = `Later that night`;
    },

    async () => {
        narration.dialogue = {
            character: girlBrian,
            text: `Hi Angeline. Long time no see!`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Is that who I think that is.`,
        };
    },
    async () => {
        await moveIn(
            "brianGirl1",
            {
                value: ["brianGirl1"],
                options: { xAlign: 0, yAlign: .4},
            },
            { direction: "left", speed: 50 }
        );
        narration.dialogue = {
            character: girlBrian,
            text: `Welcome back to school. It is lovely to see you again.`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Girl you have grown so much. And I am not talking about your height.`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Got any tea?`,
        };
    },
    async () => {
        await moveOut("brianGirl1", { direction: "right", speed: 50000 });

        await moveIn(
            "brianGirl2",
            {
                value: ["brianGirl2"],
                options: { xAlign: 0, yAlign: .4},
            },
            { direction: "left", speed: 50000 }
        );
        narration.dialogue = {
            character: girlBrian,
            text: `No, like I said I only like you.`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `I like you too. We are the best-est of friends.`,
        };
    },
    async () => {
        
        narration.dialogue = {
            character: girlBrian,
            text: `*whisphers* ~~not like friends~~`,
        };
    },
    async () => {
        narration.dialogue = {
            character: mc,
            text: `Who did you invite?`,
        };
    },
    async () => {
        narration.dialogue = {
            character: girlBrian,
            text: `About that...`,
        };
    },
    async () => {
        narration.dialogue = `Knock Knock`;
    },
    async () => {
        await moveIn(
            "brianRain1",
            {
                value: ["brianRain1"],
                options: { xAlign: .4, yAlign: .4},
            },
            { direction: "left", speed: 50 }
        );
        await moveIn(
            "brianBase1",
            {
                value: ["brianBase1"],
                options: { xAlign: .65, yAlign: .4},
            },
            { direction: "left", speed: 50 }
        );
        await moveIn(
            "brianCool1",
            {
                value: ["brianCool1"],
                options: { xAlign: .9, yAlign: .4},
            },
            { direction: "left", speed: 50 }
        );
        await moveIn(
            "brianTeacher1",
            {
                value: ["brianTeacher1"],
                options: { xAlign: 1.1, yAlign: .4},
            },
            { direction: "left", speed: 50 }
        );
        
        narration.dialogue = {
            character: baseballBrian,
            text: `Are we intruding?`,
        };
    },
    async () => {
        
        narration.dialogue = {
            character: mc,
            text: `No not at all. ~~Why did Briana invite so many boys~~`,
        };
    },
    async () => {
        await moveOut("brianBase1", { direction: "right", speed: 50000 });
        await moveIn(
            "brianBase3",
            {
                value: ["brianBase3"],
                options: { xAlign: 0.65, yAlign: .4},
            },
            { direction: "left", speed: 50000 }
        );
        narration.dialogue = {
            character: baseballBrian,
            text: `Great, lets get the party started!`,
        };
    },
    async () => {
        await moveOut("brianBase3", { direction: "right", speed: 50000 });
        await moveOut("brianTeacher1", { direction: "right", speed: 50000 });
        await moveOut("brianCool1", { direction: "right", speed: 50000 });
        await moveOut("brianRain1", { direction: "right", speed: 50000 });

        narration.dialogue = {
            character: girlBrian,
            text: `Let me sing first!`,
        };
        s1.play({
            loop: false,
        });
    },
    async () => {
        s1.pause();
        await moveOut("brianGirl1", { direction: "right", speed: 50000 });
        await moveIn(
            "brianGirl2",
            {
                value: ["brianGirl2"],
                options: { xAlign: 0, yAlign: .4},
            },
            { direction: "left", speed: 50000 }
        );
        narration.dialogue = {
            character: girlBrian,
            text: `Thank you Thank you. `,
        };
        
    },
    async () => {
        narration.dialogue = {
            character: girlBrian,
            text: `Now it is your turn raincoat dude`,
        };
    },

    async () => {
        await moveOut("brianGirl2", { direction: "right", speed: 50000 });
        await moveIn(
            "brianRain3",
            {
                value: ["brianRain3"],
                options: { xAlign: .3, yAlign: .4},
            },
            { direction: "right", speed: 50 }
        );
        s2.play({
            loop: false,
        });
        narration.dialogue = {
            character: rainBrian,
            text: `This one goes out to the girl I fell for in the rain`,
        };
    },
    async () => {
        await moveOut("brianRain3", { direction: "right", speed: 50000 });
        await moveIn(
            "brianRain1",
            {
                value: ["brianRain1"],
                options: { xAlign: .3, yAlign: .4},
            },
            { direction: "right", speed: 50000 }
        );
    
        narration.dialogue = {
            character: rainBrian,
            text: `You are the reason why I embrace rainy days.`,
        };
    },
    async () => {
        s2.pause();
        await moveOut("brianRain1", { direction: "right", speed: 200 });
        await moveIn(
            "brianTeacher1",
            {
                value: ["brianTeacher1"],
                options: { xAlign: .3, yAlign: .4},
            },
            { direction: "right", speed: 50 }
        );
        s3.play({
            loop: false,
        });
        narration.dialogue = {
            character: rainBrian,
            text: `Your turn Prof`,
        };
    },
    async () => {
        narration.dialogue = {
            character: teacherBrian,
            text: `Let me just say. I do not know any Chinese. But I will try to sing as accurately as possible`,
        };
    },
    async () => {
        s3.pause();
        // s4.play({
        //     loop: false,
        // });
        await moveOut("brianTeacher1", { direction: "right", speed: 50000 });
        await moveIn(
            "brianGirl1",
            {
                value: ["brianGirl1"],
                options: { xAlign: .3, yAlign: .4},
            },
            { direction: "right", speed: 300 }
        );
        narration.dialogue = {
            character: girlBrian,
            text: `Out of here professor. You are a racist and a creep. Moving on. I want to hear your neighbor play`,
        };
    },
    async () => {
        s4.play({
            loop: false,
        });
        await moveOut("brianGirl1", { direction: "right", speed: 50000 });
        await moveIn(
            "brianBase2",
            {
                value: ["brianBase2"],
                options: { xAlign: .3, yAlign: .4},
            },
            { direction: "right", speed: 300 }
        );
        narration.dialogue = {
            character: baseballBrian,
            text: `Here we go!`,
        };
    },
    async () => {
        
        await moveOut("brianBase2", { direction: "right", speed: 50000 });
        await moveIn(
            "brianBase3",
            {
                value: ["brianBase3"],
                options: { xAlign: .3, yAlign: .4},
            },
            { direction: "right", speed: 50000 }
        );
        narration.dialogue = {
            character: baseballBrian,
            text: `I love this song`,
        };
    },
    async () => {
        s4.pause();
        s5.play({loop: false});
        await moveOut("brianBase3", { direction: "right", speed: 50000 });
        await moveIn(
            "brianCool3",
            {
                value: ["brianCool3"],
                options: { xAlign: .3, yAlign: .4},
            },
            { direction: "right", speed: 200 }
        );
        narration.dialogue = {
            character: coolBrian,
            text: `Now its my time to shine! This song is for you Angeline. My one and only you!`,
        };
    },
    async () => {
        
        await moveOut("brianCool3", { direction: "right", speed: 50000 });
        await moveIn(
            "brianCool2",
            {
                value: ["brianCool2"],
                options: { xAlign: .3, yAlign: .4},
            },
            { direction: "right", speed: 200 }
        );
        narration.dialogue = {
            character: coolBrian,
            text: `My Only One....`,
        };
    },
    async () => {
        s5.pause();
        await moveOut("brianCool2", { direction: "right", speed: 50000 });
        await moveIn(
            "brianCool1",
            {
                value: ["brianCool1"],
                options: { xAlign: .3, yAlign: .4},
            },
            { direction: "right", speed: 200 }
        );
        narration.dialogue = {
            character: coolBrian,
            text: `I hope you enjoy me singing :D`,
        };
    },
    async () => {
        
        await moveOut("brianCool1", { direction: "right", speed: 50000 });
        await moveIn(
            "brianGirl1",
            {
                value: ["brianGirl1"],
                options: { xAlign: .2, yAlign: .4},
            },
            { direction: "right", speed: 200 }
        );
        narration.dialogue = {
            character: girlBrian,
            text: `To tell you the truth, I invited everyone here because everyone likes you.`,
        };
    },
    async () => {
        await moveIn(
            "brianRain1",
            {
                value: ["brianRain1"],
                options: { xAlign: .4, yAlign: .4},
            },
            { direction: "left", speed: 50 }
        );
        await moveIn(
            "brianBase1",
            {
                value: ["brianBase1"],
                options: { xAlign: .65, yAlign: .4},
            },
            { direction: "left", speed: 50 }
        );
        await moveIn(
            "brianCool1",
            {
                value: ["brianCool1"],
                options: { xAlign: .9, yAlign: .4},
            },
            { direction: "left", speed: 50 }
        );
        await moveIn(
            "brianTeacher1",
            {
                value: ["brianTeacher1"],
                options: { xAlign: 1.1, yAlign: .4},
            },
            { direction: "left", speed: 50 }
        );
        narration.dialogue = {
            character: girlBrian,
            text: `And we wanted to see who you would choose to be your Only One!`,
        };
    },

    async () => {
        
        narration.dialogue = {
            character: girlBrian,
            text: `I hope you make the right decision.`,
        };
        
        narration.choiceMenuOptions = [
            new ChoiceMenuOption("Your roomate downstairs", startLabel, {}, { type: "jump" }),
            new ChoiceMenuOption("Cool Brian", startLabel, {}, { type: "jump" }),
            new ChoiceMenuOption("Professor Le", startLabel, {}, { type: "jump" }),
            new ChoiceMenuOption("Silent Brian", startLabel, {}, { type: "jump" }),
            new ChoiceMenuOption("Briana", startLabel, {}, { type: "jump" }),
            new ChoiceMenuOption("All of the above", trueEnding, {}, { type: "jump" })
        ];
    },

]);

const trueEnding = newLabel("trueEnding", [
    
    async () => {
        narration.dialogue = `You look up at me, laughing from joy, cringe and embarassment. 
            Happy anniversary!`;

    },
    async () => {
        narration.dialogue = `The End`;
    },
    narration.onGameEnd = async (props) => {
        props.navigate("/end")
    }
]);


// async () => {
        //     narration.requestInput({ type: "string" }, "Peter");
        //     narration.dialogue = `What is your name?`;
        // },
