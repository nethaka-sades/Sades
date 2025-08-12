/*
 *  
 *   Copyright 2025 Nethaka De Saram
 *  
 *  Licensed under the Apache License, Version 2.0 (the 'License');
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  
 *      http://www.apache.org/licenses/LICENSE-2.0
 *  
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an 'AS IS' BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *  
 *  
 *  
 *  
 *  Created on Mon Jul 28 2025
 *  
 */

"use client";
import { motion } from "motion/react";

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const TRANSITION_SECTION = {
  duration: 0.3,
};


export default function Home() {
  return (
    <motion.main
      className=""
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="px-4 py-12 flex-1 border-y">
          <h3 className="text-lg font-bold">About</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            I&apos;m{" "}
            <span className="text-amber-600 dark:text-amber-500">
              Nethaka De Saram
            </span>
            , a student based in Sri Lanka.
          </p>
        </div>
      </motion.section>
      

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="px-4 flex-1 py-12 border-b"
      >
        <h3 className="text-lg font-bold">Let's Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to{" "}
          <a className="hover:text-amber-600 underline dark:text-zinc-300 dark:hover:text-amber-500" href={`mailto:${"sades.dev01@gmail.com"}`}>
            email me
          </a>
          {" "}
          and find my projects' source code{" "}
          <a className="hover:text-amber-600 underline dark:text-zinc-300 dark:hover:text-amber-500" href={"https://www.github.com/nethaka-sades"}>
              here on github.
          </a>
          {" "}
          Also I am available on{" "}
          <a className="hover:text-amber-600 underline dark:text-zinc-300 dark:hover:text-amber-500" href={"https://www.instagram.com/nethaka_de_saram/"}>
              instagram
          </a>
          {" "}
          and I tweet on{" "}
          <a className="hover:text-amber-600 underline dark:text-zinc-300 dark:hover:text-amber-500" href={"https://www.x.com/nethaka_sades"}>
              X.
          </a>
          {" "}
        </p>
        
      </motion.section>
    </motion.main>
  );
}
