import Image from 'next/image'
import { Wrapper, Value } from './style'

import hp from 'assets/images/hp.png'
import attack from 'assets/images/attack.png'
import defense from 'assets/images/defense.png'
import specialAttack from 'assets/images/special-attack.png'
import specialDefense from 'assets/images/special-defense.png'
import speed from 'assets/images/speed.png'

export default function Mode({ stats, ...props }) {
  const imageStats = {
    hp,
    attack,
    defense,
    'special-attack': specialAttack,
    'special-defense': specialDefense,
    speed
  }

  return (
    <Wrapper mode={props.mode}>
      {stats.map((stat, index) => (
        <div className="item" key={index}>
          <div className="icon">
            <Image
              src={imageStats[stat.stat.name]}
              alt={stat.stat.name}
              title={stat.stat.name}
              width={20}
              height={20}
            />
          </div>

          <Value color={stat.stat.name}>
            {props.mode === 'grid' ? (
              <progress
                value={stat.base_stat}
                title={stat.base_stat}
                max="200"
              />
            ) : (
              <div>{stat.base_stat}</div>
            )}
          </Value>
        </div>
      ))}
    </Wrapper>
  )
}
