let movies = [
    {
        id: 1,
        title: "Sweet Home",
        year: 2020,
        description:
            "Khi con người biến thành quái vật man rợ gieo rắc kinh hoàng, một thiếu niên trăn trở và hàng xóm ở căn hộ của cậu phải chiến đấu để sinh tồn – và giữ lấy nhân tính.",
        genres: ["horror", "drama"],
    },
    {
        id: 2,
        title: "Mission Imposible",
        year: 2011,
        description:
            "Siêu đặc vụ Ethan Hunt và đội của mình đảm nhận một nhiệm vụ chết chóc khác... để chứng minh họ trong sạch khi bị đổ tội đánh bom điện Kremlin.",
        genres: ["drama", "action"],
    },
    {
        id: 3,
        title: "Vincenzo",
        year: 2021,
        description:
            "Trong chuyến thăm quê hương, một luật sư mafia người Ý gốc Hàn cho một tập đoàn không có đối thủ nếm mùi gậy ông đập lưng ông và cả chút công lý.",
        genres: ["drama", "romantic"],
    },
    {
        id: 4,
        title: "Squid Game",
        year: 2021,
        description:
            "Hàng trăm người chơi kẹt tiền chấp nhận một lời mời kỳ lạ: thi đấu trong các trò chơi trẻ con. Đón chờ họ là một giải thưởng hấp dẫn – và những rủi ro chết người.",
        genres: ["horror"],
    },
    {
        id: 5,
        title: "My Name",
        year: 2020,
        description:
            "Sau khi bố bị sát hại, một phụ nữ muốn trả thù đặt niềm tin vào tên trùm tội phạm quyền lực – và gia nhập lực lượng cảnh sát theo chỉ thị của hắn.",
        genres: ["drama", "action"],
    },
];

export const getMovies = () => movies;

export const getMovieById = (id) => movies.find((movie) => movie.id == id);

export const deleteMovieById = (id) =>
    (movies = movies.filter((movie) => movie.id != id));
