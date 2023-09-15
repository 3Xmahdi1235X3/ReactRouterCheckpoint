const Movies = [
    {
      id:1,
      name: "Inception",
      description: "A mind-bending sci-fi thriller about dreams within dreams.",
      imageURL:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRhJNaN0nQi5oaoWPNzCEDgc-bXdofmz6LT7GbxjoukjWSgC-p",
      rate: 4.5,
      trailerURL:"https://www.youtube.com/embed/YoHD9XEInc0?si=Ulxp7ALY95RfLY0E"
    },
    {
        id:2,
      name: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqbck_Vr9qiTAwDkR7ln02KPTkRLdNtIud5RR3WkRfvKo0tei",
      rate: 5.0,
      trailerURL:"https://www.youtube.com/embed/NmzuHjWmXOc?si=dc3quyauEogg0VqY"

    },
    {
      id:3,
      name: "The Dark Knight",
      description:
        "The Batman faces off against the Joker in this epic battle of good versus evil.",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiotskdRwsqkA50EJ3tvLwgVyag1O27eYXRuEXOrFEcLyDXb9e",
      rate: 4.8,
      trailerURL:"https://www.youtube.com/embed/EXeTwQWrcwY?si=xiNFduSNBQOVEJ5n"
    },
    {
      id:4,
      name: "Pulp Fiction",
      description:
        "A nonlinear narrative weaves together various stories of crime and redemption in this Quentin Tarantino classic.",
      imageURL:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAKQMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAFBgADBAIB/8QAOxAAAQMCBAQDBAQPAAAAAAAAAQIDBAURABIhMQYTQVEiYXEUFVKRgZOUoRYjJTJCQ1NUVZKisdHS4f/EABkBAAIDAQAAAAAAAAAAAAAAAAQFAAIDAf/EACIRAAICAgEEAwEAAAAAAAAAAAECAAMRITEEEhNBI1GBIv/aAAwDAQACEQMRAD8A7NQlNc1+E246hKbLO6UE7X7dcUCsVTxFsKKAdSOgv66Y54ZqUWC9LkylKUmzbIaRYqcClXUMp3FkWPkrDBBcoTjTrLDoDbjYMhtd7nIHCLkHQXyHzOm5sEVfTZUbH7HdlgRjkEwY2uvSYhlMsuqZRfMvMABbzJscVrqNXK+UUuczW6QdiL9L40TKxT+H4EyQ7HbXFXKavZJcWY5WbixNrjw9jri1dcpAq8WkJbeK32DJU4lhIBHKc8SlXvuo2Nrajtravpi6hgZm94RiCIMTVannQFqUE66pUL/3xd7fK/bOfWHB+oRojsBS4cRpRKgWJLIGRSABsRp95+ZOAPsknsMBdQjI+DCqXR1zjET3ZUqK+9Hj5FBzILKbBva+nnucY5VbqUGfKjx8pShOV0tIABABIuLgHr9F8ew3nJFXZU5lC83hygqIPkOp7Y20NTNB4jeh1O4aksJUFOq5dki5srXff5eeGteVG94EwvIOhrMCVPimTUInu8LkAueB0WAChpYAA/cb4pbMuNFfeU86uW2DHVZ0lKGeyewHbax20OM/FT7bfE70iEnIgKQtvw22AsbH0xoiym0tMSApxbyyQ4EMgoGqrHck6GxBA001waoLKCo1F+VDEMdxr4V42f4foppUiO06ze7aiNBdRKr233010wV/Dam/uyvtZwsM0yk1CK83TqjJzNtBw8yErlsX/VqXe+nxW2t54Ee46n8cT7QP8YDtoRz8kJRyB/AzHemwqM3FQpMWciWnTnLjqJJPUA3T9GFXjB0xOIoTz7hWGUNZrp1UCLqO/aw3xY+ptSEkc1xY6Ltb01/5jTMcfnym5kmArmLbS2goIAIA6XOp01t6b6Yt3HuGvuatVrbQbVIcGrT6ZFhyUF6XK5ZdHiypJABPz28sZ5HDcpmtOwYLp5KFkc5fTUi5A9MN/C8Ee/Ii5kd1pttebIsZSSm50PXbDe3wyfb5MulpZe5yR4XFgOEakjppfW4PbfFqrGXS+plfShbLe4pvMNxuG24MCpGGUr/Guc1xIc3Jucqbm53sB0udsLXsjf8AE2PrsMnEK58IBuVHS2pX5oKQEq9CRr88L3Od+CP/AEY4WdpotSKNHMwhExtYSqXAC12KW1O2Wc2o0t54u/KUVSVmpQGUuJzJtJy3HcXGuJiYM8a84i/z2cZji9xU5I4eZ94PQjLAKWpjcopK1D9JRtYnTWw18sDovFfFzMZ9VOq1ODJJK3UpCi2APjsTYA7qxMTEFa8znlJHbF9hqdVJKgqoQZMx65JVI8azqSSSNcGfe7HxMfzH/XExMQoMyC5sT//Z",
      rate: 3.7,
      trailerURL:"https://www.youtube.com/embed/s7EdQ4FqbhY?si=cg_uUuxMfnm-0rEk"
    },
    {
      id:5,
      name: "Avatar",
      description:
        "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      imageURL:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAJQMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAABgIEBQcD/8QAMRAAAgEDAwIDBwIHAAAAAAAAAQIDAAQRBRIhBjETQVEHFDJxgZGhYcEiIzRCYnKi/8QAGQEAAgMBAAAAAAAAAAAAAAAAAgQBAwUA/8QAHREAAgMAAwEBAAAAAAAAAAAAAAECAxESMUEhE//aAAwDAQACEQMRAD8A5hpUMskm22gM07DgAfCKnbGe21CNri33gNjacdzx++K0dAmWBp/CjR5tmArsVz9vpUr+zkiaQ7wX8FpNy9gdu78Hzphy4+g5y+EbCaawY31pCg3fwhjzsznB4+RqHVbqmtMqhfgWQkHIYkA1b0nU1e7hfIjjbBIzgKV5x+TVfqm4s9VvlvbJgJdm2SILjsTz6Dv2oJXPnngca1w30w3AJyvY0V7wxZUgtgg4IIoptT1aVYW5baW1vopCpCkYcEdxV251IOlxEF5kK73I/tHl9cCn6DpZ5grXS7FI4Zq9JPZxb3X9KzlT8bAVl3Xw0arraWnNemUt7nUi1yDJDG4Pu+SoYZ55HnimfaNLTUrG3lSJ4Jma1DAFZCC3ckZJB8x3z2pkHs1W3s2S1QJOysu485JHB/QjyP61NvZ5NGLeW6k8Xw1GA4zyKBXqWoH8/Wc3tdJuZohLOh3MAc5BzRT9eaPMJAoGFUYAXgCitCFi4oqcVpmXWgdW9PytJaXk1xp0bYjcTh8AngFH8/kK1ZOstWhsX027smjndVJktZRGdnchgCSCVzyDkZzisvUerYdSsxaPCIctuLe9EYOMA4GM4+dWendY0jQ0W4tre7ctGTJK1wCZADhiwzjGc/eseVdm7msed1aiuTR0vRdfa+iKSQNbXUGFlhuOGHHBHqD68fSs7qzVpwqw2kp3gb5Cg7egpdk600sNlbK88SNWQBWjBQAZIxnOAMfjHesPVeobC4ZNtpfb5F3fGrFlP+vaq/zv36mRXOjl2hmXVbeeGN5jGsmMOBkYNFIZu4clYYZFCnB3sRRTai8ObhomW95AqbDhD5fyWIH/AFVltQUoAbt12jaAEAAHp8qKKeM9/eykL9t+RcMrd92efLzz/iPtUjcvujf3gNsGFA8hRRUNv0lRS6LCarHGMF33dztmxzRRRXYgj//Z",
      rate: 4.3,
    },
  ];
  export default Movies