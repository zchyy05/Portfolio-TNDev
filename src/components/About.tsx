import { motion } from "motion/react";
import { Code, Coffee, Users, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Creating intuitive and accessible user experiences",
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "Tackling complex challenges with creative solutions",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a BSIT cum laude graduate and freelance full-stack developer,
              helping students and clients bring their ideas to life through
              capstone and thesis projects. I focus on building clean,
              functional, and user-friendly web and mobile applications.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I began my coding journey in 2019 as a senior high school
                student at Valencia National High School, where I took the
                Computer Programming track under the TVL strand. That early
                exposure sparked my passion for development, leading me to
                pursue a degree in BSIT.
              </p>
              <p className="text-muted-foreground">
                Since then, I’ve been building projects for clients and students
                as a freelance developer, constantly learning and growing
                through hands-on experience. I enjoy exploring new technologies
                and turning ideas into real, impactful applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">What I Do</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Frontend Development (React, Vite)</li>
                <li>• Backend Development (Node.js, Express)</li>
                <li>• Database Design (PostgreSQL, MySQL)</li>
                <li>• Cloud Deployment (Vercel, Render)</li>
                <li>• UI/UX Design & Prototyping(Figma)</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
