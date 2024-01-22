import { BestTalent } from "../cmps/HomePage/BestTalent"
import { DistributedTeams } from "../cmps/HomePage/DistributedTeams"
import { GetStarted } from "../cmps/HomePage/GetStarted"
import { SuccessStories } from "../cmps/HomePage/SuccessStories"



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