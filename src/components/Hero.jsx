import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[48px] sm:text-[60px]`}>
            Hi👋, I’m <span className="text-[#915eff]">Varun</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-white-100 text-[20px] sm:text-[26px]`}>
            Fullstack dev | Exploring Blockchain | Hackathon Addict
          </p>
          <p className="text-white-200 text-[16px] sm:text-[20px] mt-5 max-w-lg leading-relaxed">
            I am a passionate full-stack developer with a knack for creating innovative solutions. I thrive on challenges and love to push the boundaries of technology. 
            
          </p>
          <div className="mt-8">
            <p className="text-white-100 text-[22px] sm:text-[28px] font-semibold tracking-wide">
              Achievments
            </p>
            <ul className="text-white-200 text-[16px] sm:text-[20px] mt-4 list-disc list-inside leading-loose">
              <li>Eth India’ 25: Snagged the Okto Track win ($2,500 prize).</li>
              <li>Rajasthan Police Hackathon 1.0: 1st in problem statement, 2nd runner-up overall (1,665 teams).</li>
              <li>Barclays Project Expo: Took 1st prize for standout innovation.</li>
              <li>Layer 2.0 Hackathon: Won the Shardeum Track for optimized brilliance.</li>
            </ul>
          </div>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;