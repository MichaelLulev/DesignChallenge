import { BestTalent } from "../cmps/BestTalent"
import { DistributedTeams } from "../cmps/DistributedTeams"
import { GetStarted } from "../cmps/GetStarted"
import { SuccessStories } from "../cmps/SuccessStories"



export function HomePage() {

    return (
        <section className="home-page">
            <BestTalent />
            <DistributedTeams />
            <SuccessStories />
            <GetStarted />
        </section>
    )
}