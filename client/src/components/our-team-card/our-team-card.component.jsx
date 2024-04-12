const OurTeamCard = (person) => {
    const { name, position, image } = person.person;
    return (
        
        <div class="text-center">
        <img class="rounded-full w-24 h-24 mx-auto" src={image} alt={name}/>
        <div class="mt-2 sm:mt-4">
          <h3 class="font-medium text-gray-200">
            {name}
          </h3>
          <p class="text-sm text-gray-400">
            {position}
          </p>
        </div>
      </div>
    )
}

export default OurTeamCard;