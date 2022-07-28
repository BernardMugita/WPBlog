import React from 'react'
import '../SinglePost/Singlepost.scss'
import { Link } from 'react-router-dom'
import postimg from '../../Resoources/postimg.jpg'

const Singlepost = () => {
    return (
        <div className='Singlepost'>
            <div className="routes">
                <Link to="/"><p>Home</p></Link>
                <p>/</p>
                <Link to="/categories"><p>Categories</p></Link>
                <p>/</p>
                <Link to="/categories/categoryname"><p>The Character Series</p></Link>
                <p>/</p>
                <Link to="/categories/categoryname/:id"><p>Trip</p></Link>
            </div>
            <div className="featured-image">
                <img src={postimg} alt="" />
            </div>
            <div className="blog-post">
                <div className="blog-title">
                    <h1>Trip</h1>
                    <p>The Character Series</p>
                </div>
                <div className="blog-body">
                    <p>
                        Don’t you think that its kinda funny how everything you were told as a child like a warning, directive or opinion ended up coming true? No matter how unbelievable it might have sounded the first time it was said to you. There is nothing new under the sun apparently. I let out a labored cough trying to gain bearing of where I am or at least how long it had been since I strayed away from the rest of the world. I think I am beginning to get philosophical because I am deluded from the panic and fatigue, I have been walking for what feels like half a day in whatever direction I could see a path; for some reason, I think I have been going in circles, that’s what it’s called when you take four left turns. I am becoming increasingly sure that I am not going to find a way out; so much for the survival training. <br /> <br />

                        I sit down to try and piece it together, I could always rely on myself to pull me out of sticky situations. As much as I know I am beyond my limits, “dangling in the deep sea”, I try to convince myself that I am still in control. Control? What does that mean? Do you think it is possible to control all your impulses, transcend beyond your primal fears and worries and gain absolute poise? It is the first time I am noticing you, my conscience, loudest when no one is listening, huh? I think that is a coward’s trait but what do I know… I have learned to depend on myself because at least I am sure that I am still here and I will still be here tomorrow; maybe that’s what you are, my conscience. <br /> <br />

                        Denial intensifies when the truth becomes clearer; I am lost. But wait, I can still find a way out, really? Start walking then, that’s enough of a break. I take one last gulp of my water then pump myself up one last time, a trip from nowhere into nothing hoping to uncover something. Hope is a dangerous thing, especially when you are drowning; you always think you will reach dry land until you are gulping water at the bottom of a creek. “Yoda!” I stare for a while, “no, it’s just a mushroom”. It feels like the first step of a long hike, you know you gotta get there, but you know it’s gonna be a long one. I look obsessively at my legs as I drag them over the loose sand my mind wandering to whatever corners of the world it could possibly conceive and that’s a lot of freedom. <br /> <br />

                        It’s often when you are lost that the things that you neglected in the past come rushing demanding their “child support”. I finally come to terms with the facts surrounding my conundrum and some of the lessons from my past began to come to me. I still feel dizzy, cold, and unsure about my next steps but better move five than none. As I look for material to set up my camp, I understand that it is probably the thought that my situation is unique that birthed my eerie depression. If I had come to terms with the devious schemes that life surrounds everyone with, I’d face everything gracefully, because there is nothing new under the sun and just like I was lost someone else had been before and they got out, by whatever means. That dangerous hope begins to lift like a bird charging on its miniature runway preparing to fly; but this time it’s not a wish that things will be alright, it is the commitment to survival. <br /> <br />

                        The darkest hour comes before it dawns. Grace, overlooked, important nonetheless, to sit and wait even when the outcome is uncertain. Fire becomes very entertaining when all your recreational avenues are out of service, I find myself watching the wood burn, the sparks form and the fire consume everything perfectly, equally, and violently. The sound animation from the flames cut through the silence of the forest, all I have to do now is wait. I shut my eyes and breath in through my nose and out through my mouth to find a rhythm with the world, the silence and the violent confidence of the burning flames. Your truest form is your most powerful form. I almost do not notice the fire burn out, I had been still for a significant minute. Is it really possible to gain control? Is it possible to control all your impulses, transcend beyond your primal fears and worries and gain absolute poise? <br /> <br />

                        Sir! Sir! I am interrupted by synchronized voices yelling out for me. The last call is significantly softer and almost as if the person is in disbelief. I open my eyes slowly to see what is happening, the light almost blinds me; two of the members of the search party stood at the entrance of my camp with their jaws resting on their chests. I had become the fire. Transcendence, the ability to strengthen under adversity, to grow a shell and shed the weight to be reborn into a new being unafraid of life but never too arrogant to appreciate the magnificence. I can feel a smile form on my face, I feel alive like I never lived before; resolve, nothing can ever get through.
                    </p>
                </div>
                <div className="meta-tags">
                    <div className="author">
                        Bernard Mugita
                    </div>
                    <div className="date">
                        July 21 2022
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singlepost