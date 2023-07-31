import React from 'react'

import { BiUserPin } from 'react-icons/bi'

export default function ResponseQuestion() {
  return (
    <div className=" 
          grid gap-4 p-5
          border border-black rounded">
            <div className="flex gap-2 align-text-bottom">
                <BiUserPin className="text-3xl h-full" />
                <div className="grid">
                    <span className="text-base font-semibold">Username</span>
                    <span className="text-xs text-gray-600">3 minutes</span>
                </div>
            </div>
            <p className="text-base line-height-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit, massa nec dictum pretium, purus ligula imperdiet lacus, nec sollicitudin quam erat eget eros. Maecenas quis sagittis justo. Curabitur hendrerit eros ante, vel fringilla nisl commodo sed. Proin at fringilla lorem, quis tincidunt felis. Nulla molestie fermentum porttitor. Phasellus id dignissim dui. Quisque facilisis vulputate 
            </p>
          </div>
  )
}
