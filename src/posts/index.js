// Blog posts are defined here for easy management
// Each post has metadata and content

export const posts = [
  {
    slug: 'on-learning-in-public',
    title: 'On Learning in Public',
    date: '2024-12-27',
    description: 'Why I decided to start writing, and what I hope to get out of it.',
    tags: ['meta', 'writing'],
    content: `
When I started this website, I had to confront a question that plagues many would-be writers: why put thoughts out in public at all?

There's something vulnerable about writing. You're taking ideas that feel clear in your head and pinning them down in words, where their imperfections become visible. It's much safer to keep thinking, keep reading, keep accumulating—and never commit.

But I've come to believe that writing is thinking. The act of explaining something forces a precision that private rumination doesn't demand. You discover the holes in your understanding only when you try to make someone else understand.

## The case for learning in public

There's a long tradition of learning through teaching. Richard Feynman famously advocated for explaining concepts in simple terms as a way to truly understand them. But I'd extend this further: there's value in explaining things *before* you fully understand them.

When you write about something you're still learning, you're forced to:

1. **Make your confusion explicit.** "I don't understand X" is more useful than a vague sense of not-getting-it.
2. **State your current best guess.** This becomes a stake in the ground that future learning can correct.
3. **Invite correction.** Others can point out where you've gone wrong, accelerating understanding.

## What I hope to write about

My interests are embarrassingly broad. At any given time, I'm likely reading about:

- The mathematics and engineering of machine learning
- Economic history and the origins of modern prosperity
- Philosophy of science and epistemology
- Literature that helps me understand what it means to be human

I don't expect to become an expert in all of these. But I do believe that ideas from different fields illuminate each other. The same patterns show up in different guises. And the effort of translation—explaining physics to someone who thinks in economics, or vice versa—forces a deeper understanding.

## A note on imperfection

Everything here is provisional. I'll get things wrong. I'll change my mind. That's not a bug—it's the point.

If you're reading this and you see an error, or you think I'm missing something important, please reach out. I'm here to learn.

---

*This is the first post on a new website. Let's see where it goes.*
    `.trim()
  },
  {
    slug: 'what-thermodynamics-taught-me-about-ml',
    title: 'What Thermodynamics Taught Me About Machine Learning',
    date: '2024-12-20',
    description: 'Surprising connections between 19th century physics and modern neural networks.',
    tags: ['ml', 'physics', 'ideas'],
    content: `
There's a running joke in machine learning that half the field is just "gradient descent plus good ideas from physics." Like most jokes, it's funny because it's partly true.

I've been spending time lately with the foundations of thermodynamics—Boltzmann, Gibbs, the whole crew—and I keep running into ideas that feel eerily relevant to deep learning. Here are a few connections I've been thinking about.

## Energy landscapes

The central metaphor of statistical mechanics is the *energy landscape*: a surface where every possible configuration of a system corresponds to a point, and the height represents the energy of that configuration. Systems naturally flow downhill, toward lower energy states.

This is exactly how we think about loss functions in machine learning. The loss landscape is a surface over the space of possible parameters, and training is the process of rolling downhill toward minima.

But the analogy goes deeper. In thermodynamics, we learn that:

- **Local minima aren't necessarily traps.** At finite temperature, systems can escape local minima through random fluctuations.
- **The geometry of the landscape matters.** Wide valleys (flat minima) are more stable than narrow ones.
- **Entropy favors certain configurations.** Not all low-energy states are equally accessible.

All of these insights have analogs in deep learning. The role of noise in SGD, the preference for flat minima that generalize better, the way architectural choices constrain what solutions are reachable—these are thermodynamic ideas wearing different clothes.

## The Boltzmann distribution

One of the most beautiful results in statistical mechanics is the Boltzmann distribution, which tells you the probability of finding a system in a particular state:

$$P(x) \\propto e^{-E(x)/kT}$$

Lower energy states are more probable, but not exclusively so. The temperature parameter T controls how much randomness there is: at high T, all states are roughly equally likely; at low T, the system concentrates in the lowest-energy states.

This is exactly the softmax function we use everywhere in deep learning, with temperature as a hyperparameter. When people talk about "annealing" learning rates, they're using language directly borrowed from metallurgy and thermodynamics.

## What this suggests

I'm not claiming that neural networks *are* thermodynamic systems in any deep sense. The analogies might be superficial, or they might not.

But I do think there's something to learn from the fact that 19th century physicists developed a powerful set of tools for reasoning about high-dimensional systems with many interacting parts. Those tools were designed for gases, but they might apply more broadly.

Questions I'm curious about:

- Is there a useful notion of "temperature" in neural network training beyond just learning rate?
- What's the analog of phase transitions? (There's some work on this, actually.)
- Can free energy principles tell us something about generalization?

I don't have answers yet. But I'm going to keep reading the old physics papers and see what else falls out.

---

*If you know of good papers on the thermodynamics of deep learning, I'd love to hear about them.*
    `.trim()
  }
]

export function getPost(slug) {
  return posts.find(p => p.slug === slug)
}

export function getAllPosts() {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
