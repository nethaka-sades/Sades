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
 *  This file is directly inspired by Nim Portfolio Template by Julien Thibeaut
 *  https://github.com/ibelick/nim 
 * 
 */

'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="px-4 mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-semibold text-5xl text-black dark:text-white">
          Hi, I&apos;m Nethaka
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Sometimes they even works.
        </TextEffect>
      </div>
    </header>
  )
}
