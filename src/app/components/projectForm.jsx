import Image from "next/image";
import React from "react";

import Link from "next/link";

function ProjectForm({ item }) {
  return (
    <Link
      class="p-2 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-400 flex flex-col items-center font-mono"
      href={`/project/${item.id}`}
    >
      <Image
        src={`/${item.title}/${item.images[0]}.png`}
        class="shadow rounded-lg overflow-hidden border"
        height={500}
        width={500}
        alt=""
      />
      <div class=" mt-8">
        <h4 class="font-bold text-xl">{item.title}</h4>
        <p class="mt-2 text-gray-600">{item.type}</p>
      </div>
    </Link>
  );
}

export default ProjectForm;
