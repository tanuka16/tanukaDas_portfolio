import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const Pulse = styled.div`animation: 2s ${keyframes `${pulse}`} `;


class Projects extends Component  {
  constructor(props){
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0 ) {
      return(

        <div className="projects-grid"  style={{justifyContent: 'center', padding: "30px 20px 0px 20px"}}>
          {/*<h1 style={{paddingLeft:'50%'}}>Projects</h1>*/}

        <hr/>
        {/* project 1 */}
        <Card className='card' shadow={5} style={{minWidth:'450', mergin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontSize: '20px', height: '10em', background: 'url(images/donationApp.png) center/ cover'}}>
              {/*<h3 style={{marginTop:'150px'}}></h3>*/}
            </CardTitle>

            <CardText>
              <p style={{fontWeight:'bold'}}>Ruby on Rails + React.js + HTML + CSS</p>
              DoNation is a charity app, which allows users to research numerous charitable organizations to award donations. Users can also make use of the customer service chatbot for instructions.
            </CardText>

            <CardActions className="buttons" border>
              <Button href="https://github.com/tanuka16/DoNation-Back-end" target='_blank' colored>GitHub</Button>
              <Button href="https://youtu.be/RnQherXmMkk" target='_blank' colored>Live Demo</Button>
            </CardActions>
        </Card>

        {/* project 2 */}
        <Card className='card' shadow={5} style={{minWidth:'450', merginBottom: '20px'}}>
            <CardTitle style={{color: '#fff', fontSize: '20px', height: '10em', background: 'url(images/houseOfShoesApp.png) center/ cover'}}>
              {/* <h3 style={{marginTop:'150px'}}></h3>*/}
            </CardTitle>

            <CardText>
              <p style={{fontWeight:'bold'}}>Ruby on Rails + Bootstrap + CSS</p>
              House of Shoes is a shoe wish-list app, it holds different kinds of shoes. Users can create an account and add their favorite shoes in their wish list.
            </CardText>

            <CardActions className="buttons" border>
              <Button href="https://github.com/tlam212/Shoe_App" target='_blank' colored>GitHub</Button>
              <Button href="https://youtu.be/t1xcK1T7Y8o" target='_blank' colored>Live Demo</Button>
            </CardActions>
        </Card>

        {/* project 3 */}
        <Card className='card' shadow={5} style={{minWidth:'450', mergin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontSize: '20px', height: '10em', background: 'url(https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/03/En2e4Hm-796x398.jpg) center/ cover'}}>
              <h3 style={{marginTop:'150px'}}>VideoTube</h3>
            </CardTitle>

            <CardText>
              <p style={{fontWeight:'bold'}}>React.js + Bootstrap + CSS</p>
              VideoTube is a single page video search application, allows a user to search for any possible videos, select it and hit 'play' to watch it.
            </CardText>
            <CardActions className="buttons" border>
              <Button href="https://github.com/tanuka16/VideoTube-react" target='_blank' colored>GitHub</Button>
              {/*<Button colored>Live Demo</Button>*/}
            </CardActions>
        </Card>

        {/* project 4 */}
        <Card className='card' shadow={5} style={{minWidth:'450', mergin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontSize: '20px', height: '10em', background: 'url(https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/03/En2e4Hm-796x398.jpg) center/ cover'}}>
              <h3 style={{marginTop:'150px'}}>Alien Invaders</h3>
            </CardTitle>

            <CardText>
              <p style={{fontWeight:'bold'}}>JavaScript</p>
              Alien Invader is a single page video game app, which allows a player to shoot aliens, preventing them from reaching the bottom of the screen.
            </CardText>
            <CardActions className="buttons" border>
              <Button href="https://github.com/tanuka16/JS-AlienInvaders" target='_blank' colored>GitHub</Button>
              {/*<Button colored>Live Demo</Button>*/}
            </CardActions>
        </Card>

        {/* project 5 */}
        <Card className='card' shadow={5} style={{minWidth:'450', mergin: 'auto'}}>
            <CardTitle style={{color: '#fff', fontSize: '20px', height: '10em', background: 'url(https://miro.medium.com/max/710/1*9hd_8qR0CMZ8L0pVbFLjDw.png) center/ cover'}}>
              <h3 style={{marginTop:'150px'}}>Instagram Lite</h3>
            </CardTitle>

            <CardText>
              <p style={{fontWeight:'bold'}}>Ruby</p>
              Instagram Lite is a social media app, allows users to create an account, post images, like pictures and add comments on other users account.
            </CardText>
        </Card>


        </div>
      )
      } else if(this.state.activeTab === 1){
      return (

        <div className="projects-grid"  style={{justifyContent: 'center', padding: "30px 20px 0px 20px"}}>

        {/* blog 12 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '50%', width: '100%', background: 'url(images/blog12.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Markdown — An Easy & Fast to Learn Markup Language</h5>
            You probably never heard about it, or you did, but never thought about using it, or maybe you did use it and loved it as well...
            <a href="https://medium.com/@tanuka.das12/markdown-a-easier-fast-to-learn-markup-language-305f1faaca5d?source=friends_link&sk=3c8b59ed69f0f34c4d86483d1bf40c16" target='_blank'>more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/markdown-a-easier-fast-to-learn-markup-language-305f1faaca5d?source=friends_link&sk=3c8b59ed69f0f34c4d86483d1bf40c16" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>

        {/* blog 11 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(images/blog11.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Data Structure — Linked List | SINGLY LINKED LIST PRACTICE(LeetCode)</h5>
            A fundamental data structure used to solve many algorithms problems...
            <a href="https://medium.com/@tanuka.das12/data-structure-linked-list-singly-linked-list-practice-leetcode-d4ca850f8d14?source=friends_link&sk=185f31920048ae28b6cce057730ebb88" target='_blank'>more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/data-structure-linked-list-singly-linked-list-practice-leetcode-d4ca850f8d14?source=friends_link&sk=185f31920048ae28b6cce057730ebb88" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>


        {/* blog 10 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(images/blog10.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Debug JS Code with DevTool Network Tab</h5>
            In this article, I discuss the use of the network tab in Chrome DevTool inspect.The network panel is really useful for timing...
            <a href="https://medium.com/@tanuka.das12/debug-js-code-with-devtool-network-tab-b86352071b38?source=friends_link&sk=16b20edf9b5e789a3d6b7395ffcb3c11" target='_blank'>more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/debug-js-code-with-devtool-network-tab-b86352071b38?source=friends_link&sk=16b20edf9b5e789a3d6b7395ffcb3c11" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>


        {/* blog 1 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(images/HTML&Rails_forms.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>HTML form to form_with in Rails</h5>
            Let’s talk about forms!Why are they important? Forms are one of the main points of interaction between a web site or application and a user.
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/html-forms-to-html-forms-in-rails-4a345d9aaed2" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>
        {/* blog 2 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(images/LinledIn1.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Optimize Your LinkedIn Profile — New Developers</h5>
            With that kind of reach as professional, we can’t afford to not take LinkedIn seriously This blog focuses on optimizing the LinkedIn...
            <a href="https://medium.com/@tanuka.das12/optimization-of-linkedin-profile-for-new-developers-203a566be95" target='_blank'>more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/optimization-of-linkedin-profile-for-new-developers-203a566be95" target='_blank' raised >Medium</Button>
          </CardActions>
        </Card>
        {/* blog 3 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(images/blog3.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>React Forms</h5>
            The aim of this blog is to better understand how to create a form in React. In this example, I’m creating a new blog post. This is a basic form structure...
            <a href="https://medium.com/@tanuka.das12/react-forms-bb67b9bc7b8e" target='_blank'>more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/react-forms-bb67b9bc7b8e" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>

        {/* blog 4 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(https://instabug.com/blog/wp-content/uploads/2018/10/Oct_Articles_01_Top-ReactNative-Apps.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>React.js — Manage States</h5>
            In React state is simply data that its component maintains, which means the component can change its value. State is a class instant..
            <a href="https://medium.com/@tanuka.das12/react-js-manage-states-87830a369f0" target='_blank'>more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/react-js-manage-states-87830a369f0" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>
        {/* blog 5 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(https://instabug.com/blog/wp-content/uploads/2018/10/Oct_Articles_01_Top-ReactNative-Apps.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Components Architecture</h5>
            React is designed around the concept of reusable components. Just like you see in this app layout, how each square...
            <a href="https://medium.com/@tanuka.das12/components-architecture-734cca8bc3ab" target='_blank'>more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/components-architecture-734cca8bc3ab" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>

        {/* blog 6 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(https://instabug.com/blog/wp-content/uploads/2018/10/Oct_Articles_01_Top-ReactNative-Apps.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Rails : Flash Hash</h5>
            Flash hash is used to display messages when we create, delete, or update a subject. Inside this create method, we will check...
            <a href="https://medium.com/@tanuka.das12/rails-flash-hash-23a7126e20ab" target='_blank'>more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/rails-flash-hash-23a7126e20ab" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>
        {/* blog 7 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(https://instabug.com/blog/wp-content/uploads/2018/10/Oct_Articles_01_Top-ReactNative-Apps.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Rails API From Scratch</h5>
            Step by step process of creating rails API...
            <a href="https://medium.com/@tanuka.das12/rails-api-from-scratch-1e109cd2580d" target='_blank'>more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/rails-api-from-scratch-1e109cd2580d" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>

        {/* blog 8 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(https://instabug.com/blog/wp-content/uploads/2018/10/Oct_Articles_01_Top-ReactNative-Apps.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Set up Rails Model</h5>
            A model is a description of what the app is and what it can do. Basically it defines...
            <a href="https://medium.com/@tanuka.das12/set-up-rails-model-ba36db24bd76" target='_blank'>more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/set-up-rails-model-ba36db24bd76" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>
        {/* blog 9 */}
        <Card className='card' shadow={5} style={{minWidth:'400', mergin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundPosition: 'center', fontSize: '20px', height: '176px', width: '100%', background: 'url(https://instabug.com/blog/wp-content/uploads/2018/10/Oct_Articles_01_Top-ReactNative-Apps.png) center/ cover'}}>
          </CardTitle>
          <CardText>
            <h5 style={{fontWeight:'bold', color: 'black'}}>Set up Rails Controller</h5>
            The controller does the heavy lifting when the interaction happens between the model...
            <a href="https://medium.com/@tanuka.das12/set-up-rails-controller-bd701198a4f1" target='_blank'>more</a>
          </CardText>
          <CardActions className="blog-buttons" style={{textAlign:'center'}} border>
            <Button href="https://medium.com/@tanuka.das12/set-up-rails-controller-bd701198a4f1" target='_blank' raised>Medium</Button>
          </CardActions>
        </Card>
        <CardActions className="more-button" border>
              <Button href="https://medium.com/@tanuka.das12" target='_blank' colored> More Articles</Button>
        </CardActions>
        </div>

      )
    }
  }


  render (){
    return (
      <div>
        <div className="projects-grid" >
        {/* use the tabs for future projects */}
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}ripple>
          <Tab>Projects</Tab>
          <Tab>Blogs</Tab>

        </Tabs>

          <Grid>
            <Cell col={12}>
            <Pulse>
              <div className="content">{this.toggleCategories()}</div>
            </Pulse>
            </Cell>
          </Grid>

      </div>

        <footer style={{color:"grey", textAlign:'center', paddingTop: '35px', paddingBottom: '15px'}}>
        © Tanuka Das. All rights reserved.
        </footer>
      </div>
    )
  }
}

export default Projects;
